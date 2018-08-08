import React from "react";
import Campaign from "../../ethereum/campaign.js";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import ContributeForm from "../../components/ContributeForm";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";

class OrganizationShow extends React.Component {
  static getInitialProps = async props => {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      address: props.query.address,
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
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <h3>Contribute To This Organization</h3>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          
          <Grid.Row>
            <Grid.Column>
              <Link route={`/organizations/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default OrganizationShow;
