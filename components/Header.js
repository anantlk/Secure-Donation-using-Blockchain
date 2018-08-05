import React from "react";
import { Menu } from "semantic-ui-react";

class Header extends React.Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Item className="ui header" color={"teal"} style = {{backgroundColor:"#223"}}>
          <h1>Secure Donation</h1>
        </Menu.Item>
        {/* <Menu.Menu position="right">
          <Menu.Item className = "ui header" color={"teal"} style = {{backgroundColor:"#223"}}><h3>Add Organization</h3></Menu.Item>
        </Menu.Menu> */}
      </Menu>
    );
  }
}

export default Header;
