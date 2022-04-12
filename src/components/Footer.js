import * as React from "react";
// import { Link } from "gatsby";

import logo from "../img/logo_blue.svg";
// import facebook from "../img/social/facebook.svg";
// import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";
// import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-black-ter">
        <div
          className="content has-text-centered"
          style={{ marginBottom: "4em" }}
        >
          <p>
            <img
              src={logo}
              alt="Ukraine is forever"
              style={{ width: "16em", height: "4em" }}
            />
          </p>
          <p>
            <a
              className="has-text-centered is-size-4"
              href="https://war.ukraine.ua/support-ukraine/"
            >
              Want to help Ukraine but can't sing? Click here!
            </a>
          </p>
        </div>
        {/*<div className="content has-text-centered has-text-black-ter">
          <div className="container has-text-black-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                    <ul className="menu-list">
                    <li>
                  <Link
                    className="navbar-item"
                    to="https://war.ukraine.ua/support-ukraine/"
                  >
                    How to help Ukraine
                  </Link>
                   </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                     </li> 
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> 
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a> 
              </div>
            </div>
          </div>
        </div>*/}
      </footer>
    );
  }
};

export default Footer;
