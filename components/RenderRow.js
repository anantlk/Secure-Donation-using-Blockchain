import React from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RenderRow extends React.Component {
  async onApprove() {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
  }

  async onFinalize() {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({
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
        positive={readyToBeFinalized && this.props.request.complete}
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
