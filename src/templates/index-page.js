import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
// import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Lyrics from "../components/Lyrics";
// import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  description,
}) => {
  return (
    <div>
      <section className="section section--gradient">
        <div className="container whiteBG">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-3">
                        A song for Ukraine, in English
                      </h3>
                    </div>
                  </div>
                  <div className="tile">
                    <p>
                      There didn't seem to be any good songs in English about
                      Ukraine, so I wrote one. But I need your help, Internet,
                      to finish it! Sing it yourself, make up a tune to go with
                      it, share it. If you come up with something good, send it
                      my way and I'll post it here. I can't play any
                      instruments, and I have a voice that makes children cry,
                      but this is what the song sounds like to me:
                      <figure>
                        <figcaption>"Ukraine is Forever"</figcaption>
                        <audio
                          controls
                          preload="metadata"
                          src="/audio/UIF_shared_01.mp3"
                        >
                          Your browser does not support the
                          <code>audio</code> element.
                        </audio>
                      </figure>
                      You can do better! Try it!
                    </p>
                  </div>
                  <hr />

                  <h4 className="has-text-weight-semibold is-size-4">
                    The lyrics:
                  </h4>
                  <Lyrics />
                  <hr />
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-3">
                      Shared versions of the song
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        See more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
};

const IndexPage = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={"Ukraine is forever"}
        heading="Ukraine is forever"
        subheading="A Song for Ukraine, in English"
        description="There didn't seem to be any good songs in English about Ukraine, so I wrote one. But I need your help, Internet, to finish it!"
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

/*export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
      heading
      subheading
      description
    }
  }
`;*/
