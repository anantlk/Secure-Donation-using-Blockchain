import React from "react";
import { Link } from "../../../routes";
import { Button } from "semantic-ui-react";
import Layout from "../../../components/Layout";

class ViewRequests extends React.Component {
  static getInitialProps(props) {
    const { address } = props.query;
    console.log(address);
    return { address };
  };
  render() {
    return (
      <Layout>
        <Link route={`/organizations/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>
      </Layout>
    );
  }
}

export default ViewRequests;
