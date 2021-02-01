import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
            marginBottom: 0,
          }}
        >
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
        <div>
          <form
            className="form-container"
            name="contact"
            data-netlify-recaptcha="true"
            data-netlify="true"
            method="post"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea type="text" name="message"></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input
                type="submit"
                className="button -primary"
                style={{ marginRight: 0 }}
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
