import React from "react";
import { Link } from "../../../routes";
import {
  Button,
  Table,
  Icon
} from "semantic-ui-react";
import web3 from "../../../ethereum/web3";
import Layout from "../../../components/Layout";
import Organization from "../../../ethereum/organization";
import RenderRow from "../../../components/RenderRow";

class ViewRequests extends React.Component {
  state = {
    requests: []
  };
  static async getInitialProps(props) {
    const { address } = props.query;
    const accounts = await web3.eth.getAccounts();
    const organization = await Organization(address);
    const requestCount = await organization.methods.getRequestsCount().call();
    const approverCount = await organization.methods.approversCount().call();
    const manager = await organization.methods.manager().call();

    let requests;
    requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return organization.methods.requests(index).call();
        })
    );

    const reqApprovers = await Promise.all(
      requests.map(async (request, index) => {
        return await Promise.all(
          Array(parseInt(request.numOfAllowedApprovers))
            .fill()
            .map((ele, index) => {
              return organization.methods
                .reqApprovers(parseInt(request.id), index)
                .call();
            })
        );
      })
    );
    console.log(accounts);
    console.log(reqApprovers);
    return { address, requests, approverCount, reqApprovers, manager ,requestCount };
  }
  
  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    let requests = this.props.requests.filter((request, index) => {
      if (request.complete || accounts[0] == this.props.manager) return true;
      return this.props.reqApprovers[index].indexOf(accounts[0]) != -1;
    });

    this.setState({
      requests: requests
    });
  }

  renderRows() {
    return this.state.requests.map((request, index) => {
      return (
        <RenderRow
          id={index}
          request={request}
          key={index}
          approversCount={request.numOfAllowedApprovers}
          address={this.props.address}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        {/* <Dimmer active inverted>
          <Loader size="large">Processing Request ...</Loader>
        </Dimmer> */}
        <Link route={`/organizations/${this.props.address}/requests/new`}>
          <a>
            <Button floated="right" primary>
              Add Request
            </Button>
          </a>
        </Link>
        <Link route={`/organizations/${this.props.address}`}>
          <a>
            <Button icon labelPosition="left" floated="right" primary>
              <Icon name="left arrow" />
              Back
            </Button>
          </a>
        </Link>
        <h2>Requests</h2>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Approvals</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <h4>Found {this.state.requests.length} requests</h4>
      </Layout>
    );
  }
}

export default ViewRequests;
