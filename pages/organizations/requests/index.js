import React from "react";
import { Link } from "../../../routes";
import {
  Button,
  Table,
  Dimmer,
  Loader,
  Image,
  Segment,
  Icon
} from "semantic-ui-react";
import Layout from "../../../components/Layout";
import Organization from "../../../ethereum/organization";
import RenderRow from "../../../components/RenderRow";

class ViewRequests extends React.Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const organization = await Organization(address);
    const requestCount = await organization.methods.getRequestsCount().call();
    const approverCount = await organization.methods.approversCount().call();
    let requests;
    requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map(async (element, index) => {
          return organization.methods.requests(index).call();
        })
    );
    return { address, requests, approverCount };
  }

  renderRows() {
    //console.log(this.props.requests);
    return this.props.requests.map((request, index) => {
      return (
        <RenderRow
          id={index}
          request={request}
          key={index}
          approversCount={this.props.approverCount}
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
            <Button icon labelPosition = "left" floated="right" primary>
              <Icon name = "left arrow"/>
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
      </Layout>
    );
  }
}

export default ViewRequests;
