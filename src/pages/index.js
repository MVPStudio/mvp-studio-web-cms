import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import GearButtons from '../components/GearButtons';

const IndexPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="MVP Studio" keywords={[`gatsby`, `application`, `react`]} />
    <GearButtons />
    <Link to="/formTest">Test Form Page</Link>
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { title: { eq: "Home" } }) {
            html
          }
        }
      `}
      render={data => (
        <>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </>
      )}
    />
  </Layout>
);

export default IndexPage;
