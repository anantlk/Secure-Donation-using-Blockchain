import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
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

    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <h2>Open Organizations</h2>
        <Button floated="right" icon labelPosition="left" primary>
          <Icon name="add" />
          Add Organization
        </Button>
        {this.renderCampaigns()}
      </Layout>
    );
  }
}

export default Index;
