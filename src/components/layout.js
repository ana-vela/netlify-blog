import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import SocialButtons from "../components/socialButtons";
import "prismjs/themes/prism-okaidia.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>
          Subscribe to my <a href="https://buttondown.email/anavela">newsletter!</a>
        </p>
        <p>
          <SocialButtons /> &copy; {new Date().getFullYear()} Ana Vela{" "}
        </p>
      </footer>
    </div>
  );
};
export default Layout;