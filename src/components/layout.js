import React from "react";
import PropTypes from "prop-types";

import Header from "./header.js";
import SEO from "./seo.js";

import "./layout.css";

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = ({ children, banner, title, description }) => {
  const banner_class =
    typeof banner != "undefined" ? "alert alert-warning" : "hidden";
  return (
    <div width="100%">
      <SEO title={title} description={description} />
      <Header />
      <div className={banner_class}>{banner}</div>
      <div className="container">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
