import React from "react";
import { Link } from "gatsby";
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
            <Link to="/" className="nav-link">
              Zach Ingbretsen
            </Link>
          </NavbarBrand>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Blog
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/blog/docker-gives-you-superpowers">
                  <DropdownItem>Docker</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
        <Link to="/whoami">whoami</Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header
