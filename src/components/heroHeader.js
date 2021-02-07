import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import {
  faTwitter,
  faGithubAlt,
  faInstagram,
  faDev,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{
            __html: data.site.siteMetadata.home.description,
          }}
        />
        <div className="social">
              <a
                className="socialIcons"
                href="https://instagram.com/anaveecodes"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className="socialIcons"
                href="https://twitter.com/anaveecodes"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a
                className="socialIcons"
                href="https://github.com/ana-vela"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
              <a
                className="socialIcons"
                href="https://linkedin.com/in/ana-vela"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                className="socialIcons"
                href="https://dev.to/anaveecodes"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faDev} />
              </a>
            </div>

        <Link to="/contact" className="button -primary">
          Get in touch &rarr;
        </Link>
      </div>
    )}
  />
);
