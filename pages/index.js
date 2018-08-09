import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import Layout from "../components/Layout";
import factory from "../ethereum/factory";
import { Link } from "../routes";
import Organization from "../ethereum/organization";

class Index extends React.Component {
  static async getInitialProps() {
    const organizationAddr = await factory.methods
      .getDeployedOrganizations()
      .call();

    console.log(organizationAddr);
    const organizations = await Promise.all(
      organizationAddr.map((addr, index) => {
        const organization = Organization(addr);
        return organization.methods.getOrganizationDetails().call();
      })
    );
    console.log(organizations);
    return { organizations };
  }

  renderOrganizations() {
    return 1;
    // const items = this.props.organizations.map(address => {
    //   return {
    //     header: this.props.name,
    //     content: this.props.desc,
    //     description: (
    //       <Link route={`/organizations/${address}`}>
    //         <a>View Organization</a>
    //       </Link>
    //     ),
    //     fluid: true
    //   };
    // });

    // return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <h2>Open Organizations</h2>
        <Link route="/organizations/new">
          <a>
            <Button floated="right" icon labelPosition="left" primary>
              <Icon name="add" />
              Add Organization
            </Button>
          </a>
        </Link>
        {this.renderOrganizations()}
      </Layout>
    );
  }
}

export default Index;
