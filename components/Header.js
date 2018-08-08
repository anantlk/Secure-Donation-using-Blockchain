import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

class Header extends React.Component {
  render() {
    return (
      <Menu inverted>
        <Link route="/">
          <a
            className="ui header item"
            color={"teal"}
            style={{ backgroundColor: "#223" }}
          >
            <h1>Secure Donation</h1>
          </a>
        </Link>
        {/* <Menu.Menu position="right">
          <Menu.Item className = "ui header" color={"teal"} style = {{backgroundColor:"#223"}}><h3>Add Organization</h3></Menu.Item>
        </Menu.Menu> */}
      </Menu>
    );
  }
}

export default Header;
