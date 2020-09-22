import React from "react";
import { Link } from "gatsby";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <h3 className="brand">Zach Overflow</h3>
        <Link to="/" activeClassName="active">
          <p>Home</p>
        </Link>
        <Link to="/blog" activeClassName="active" partiallyActive={true}>
          <p>Blog</p>
        </Link>
        <Link to="/whoami" activeClassName="active">
          <p>whoami</p>
        </Link>
      </nav>
    );
  }
}

export default Header;
