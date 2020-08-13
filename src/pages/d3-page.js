import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import D3 from "../components/d3component";

const SecondPage = () => (
    <Layout>
    <SEO title="About Me" />
    <h1>whoami</h1>
        <D3 name="whatever" data={[
            {x: Math.random(), y: Math.random()},
        ]}></D3>
    <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SecondPage;
