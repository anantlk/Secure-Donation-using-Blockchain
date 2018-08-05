import React from "react";
import { Card } from "semantic-ui-react";
import Layout from "../components/Layout";
import factory from "../ethereum/factory";

class Index extends React.Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      };
    });

    return <Card.Group item={items} />;
  }
  render() {
    return <Layout>{this.renderCampaigns()}</Layout>;
  }
}

export default Index;
