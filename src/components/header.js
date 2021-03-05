import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <p className="brand">Zach Ingbretsen</p>
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="active" partiallyActive={true}>
              <p>Blog</p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
