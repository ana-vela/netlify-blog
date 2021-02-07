import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import SocialButtons from "../components/socialButtons";

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

        <SocialButtons />

        <Link to="/contact" className="button -primary">
          Get in touch &rarr;
        </Link>
      </div>
    )}
  />
);
