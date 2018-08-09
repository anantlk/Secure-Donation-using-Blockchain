import React from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Organization from "../ethereum/organization";
import { Router } from "../routes";
class RenderRow extends React.Component {
  async onApprove() {
    const organization = Organization(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await organization.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
    Router.replaceRoute(`/organizations/${this.props.address}/requests`);
  }

  async onFinalize() {
    const organization = organization(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await organization.methods.finalizeRequest(this.props.id).send({
      from: accounts[0]
    });
  }
  render() {
    const readyToBeFinalized =
      this.props.request.approvalCount > this.props.approversCount / 2;
    const { Row, Cell } = Table;
    return (
      <Row
        disabled={this.props.request.complete}
        positive={readyToBeFinalized && !this.props.request.complete}
      >
        <Cell>{this.props.id}</Cell>
        <Cell>{this.props.request.description}</Cell>
        <Cell>{this.props.request.recipent}</Cell>
        <Cell>{web3.utils.fromWei(this.props.request.value, "ether")}</Cell>
        <Cell>
          {this.props.request.approvalCount}/{this.props.approversCount}
        </Cell>
        <Cell>
          {this.props.request.complete ? null : (
            <Button onClick={this.onApprove.bind(this)} color="green" basic>
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {this.props.request.complete ? null : (
            <Button onClick={this.onFinalize.bind(this)} color="teal" basic>
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RenderRow;
