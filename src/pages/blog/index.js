import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section section--gradient">
          <div className="full-width-text-container margin-top-0 ">
            <h1
              className="has-text-weight-bold is-size-2"
              style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "1rem 2rem",
              }}
            >
              Latest Content
            </h1>
          </div>
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
