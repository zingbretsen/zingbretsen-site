import React from "react";
import { Link } from "gatsby";
import { Divider } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            Zach Ingbretsen
          </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <Link className="nav-link" to="/">Home</Link>
            </NavItem>
            <Divider type="Vertical"/>
            <NavItem>
              <Link className="nav-link" to="/blog">Blog</Link>
            </NavItem>
            <Divider type="Vertical"/>
            <NavItem>
              <Link className="nav-link" to="/whoami">whoami</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
