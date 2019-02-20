import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TeamCards from '../components/teamCards';

const WhoWeAre = () => {
  const aboutHTML = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "Who We Are" } }) {
        html
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Who We Are" keywords={[`MVP`, 'Developers', 'About']} />
      <div
        dangerouslySetInnerHTML={{ __html: aboutHTML.markdownRemark.html }}
      />
      <TeamCards />
    </Layout>
  );
};

export default WhoWeAre;
