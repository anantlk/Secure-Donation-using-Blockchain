import React from "react";
import { Link } from "../../../routes";
import { Button, Table } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import RenderRow from "../../../components/RenderRow";

class ViewRequests extends React.Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = await Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approverCount = await campaign.methods.approversCount().call();
    let requests;
    console.log(requestCount);
    if (requestCount > 0) {
      requests = await Promise.all(
        Array(requestCount)
          .fill()
          .map((element, index) => {
            return campaign.methods.requests(index).call();
          })
      );
    } else {
      requests = [];
    }
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
        <Link route={`/organizations/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
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
