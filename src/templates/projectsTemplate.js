import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your project data
  const { siteMetadata } = site;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="projects-project-container">
        <article className="projects">

        {!frontmatter.thumbnail && (
          <div className="project-thumbnail">
            <h1 className="project-title">{frontmatter.title}</h1>
            <div className="project-meta">{frontmatter.date}</div>
          </div>
        )}
        {!!frontmatter.thumbnail && (
          <div className="project-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
            <h1 className="project-title">{frontmatter.title}</h1>
            <div className="project-meta">{frontmatter.date}</div>
          </div>
        )}
          <div
            className="projects-project-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`;
