import React from "react";
import Campaign from "../../ethereum/campaign.js";
import { Card, Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";
import ContributeForm from "../../components/ContributeForm";
import web3 from "../../ethereum/web3";

class OrganizationShow extends React.Component {
  static getInitialProps = async props => {
    const campaign = await Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log(summary);
    return {
      minContributions: summary[0],
      balance: summary[1],
      requests: summary[2],
      contributors: summary[3]
    };
  };

  renderCards = () => {
    const items = [
      {
        header: "Donation Amount",
        meta: "Total amount donated in the organization",
        description: <h2>{web3.utils.fromWei(this.props.balance, "ether")}</h2>,
        style: { overflowWrap: "break-word" }
      },
      {
        header: "Requests",
        meta: "Total Number Of Requests",
        description: <h2>{this.props.requests}</h2>,
        style: { overflowWrap: "break-word" }
      },
      {
        header: "Contributors",
        meta: "Number of people who donated",
        description: <h2>{this.props.contributors}</h2>,
        style: { overflowWrap: "break-word" }
      },
      {
        header: "Minimum Contibution",
        meta: "Minimum value to contribute",
        description: <h2>{this.props.minContributions}</h2>,
        style: { overflowWrap: "break-word" }
      }
    ];

    return <Card.Group items={items} />;
  };
  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Column width = {10} >{this.renderCards()}</Grid.Column>
          <Grid.Column width = {6}>
            <h3>Conribute To This Organization</h3>
            <ContributeForm />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default OrganizationShow;
