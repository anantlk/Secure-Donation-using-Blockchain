import React from "react";
import { Form, Button, Input, Message, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Link, Router } from "../../routes";

class NewOrganization extends React.Component {
  state = {
    minContribution: "",
    name: "",
    desc: "",
    errMessage: "",
    loading: false
  };

  onSubmit = async event => {
    try {
      if (this.state.loading) return;
      const accounts = await web3.eth.getAccounts();
      this.setState({
        loading: true,
        errMessage: ""
      });
      console.log(accounts);
      await factory.methods
        .createOrganizations(
          this.state.minContribution,
          this.state.name,
          this.state.desc
        )
        .send({ from: accounts[0] });
      console.log("Redirecting");
      Router.pushRoute("/");
    } catch (err) {
      this.setState({
        errMessage: err.message
      });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <Layout>
        <h1>New Organization</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
          <Form.Field>
            <label>
              <h3>Name</h3>
            </label>
            <Input
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>
              <h3>Description</h3>
            </label>
            <Input
              value={this.state.desc}
              onChange={event => this.setState({ desc: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>
              <h3>Minimum Contribution</h3>
            </label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minContribution}
              onChange={event =>
                this.setState({ minContribution: event.target.value })
              }
            />
          </Form.Field>

          <Message error>
            <Message.Header>Error!</Message.Header>
            <p>{this.state.errMessage}</p>
          </Message>
          <Button loading={this.state.loading} primary>
            Create
          </Button>
          <Link route={`/`}>
            <a>
              <Button icon labelPosition="left" primary>
                <Icon name="left arrow" />
                Back
              </Button>
            </a>
          </Link>
        </Form>
      </Layout>
    );
  }
}

export default NewOrganization;
