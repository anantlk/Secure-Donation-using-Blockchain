import React from "react";
import { Form, Input, Message, Button, Icon } from "semantic-ui-react";
import web3 from "../../../ethereum/web3";
import Organization from "../../../ethereum/organization";
import Layout from "../../../components/Layout";
import { Link, Router } from "../../../routes";

class NewRequest extends React.Component {
  state = {
    description: "",
    value: "",
    recipient: "",
    loading: false,
    errMessage: ""
  };

  static getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  onSubmit = async event => {
    event.preventDefault();
    this.setState({
      errMessage: "",
      loading: true
    });
    const organization = Organization(this.props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      const { description, value, recipient } = this.state;
      await organization.methods
        .createRequest(description, recipient, web3.utils.toWei(value, "ether"))
        .send({
          from: accounts[0]
        });
      Router.pushRoute(`/organizations/${this.props.address}/requests`);
    } catch (err) {
      this.setState({
        errMessage: err.message
      });
    }
    this.setState({
      loading: false
    });
  };
  render() {
    return (
      <Layout>
        <h1>New Request</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event =>
                this.setState({
                  description: event.target.value
                })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Amount</label>
            <Input
              value={this.state.value}
              onChange={event =>
                this.setState({
                  value: event.target.value
                })
              }
              label="ether"
              labelPosition="right"
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={event =>
                this.setState({ recipient: event.target.value })
              }
            />
          </Form.Field>
          <Message error>
            <Message.Header>Error!</Message.Header>
            <p>{this.state.errMessage}</p>
          </Message>
          <Button floated="left" loading={this.state.loading} primary>
            Submit
          </Button>
          <Link route={`/organizations/${this.props.address}/requests`}>
            <a>
              <Button icon labelPosition = "left" primary><Icon name = "left arrow" / >Back</Button>
            </a>
          </Link>
        </Form>
      </Layout>
    );
  }
}

export default NewRequest;
