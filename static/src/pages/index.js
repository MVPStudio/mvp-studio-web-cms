import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import RehypeReact from 'rehype-react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  ProjectGear,
  InvolvedGear,
} from '../components/GearButtons';

const IndexPage = ({ location }) => {
  const homeHTML = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "Home" } }) {
        html
        htmlAst
      }
    }
  `).markdownRemark;
  const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {
      'project-gear': ProjectGear,
      'involved-gear': InvolvedGear,
    },
  }).Compiler;
  return (
    <Layout pathname={location.pathname}>
      <SEO title="MVP Studio" keywords={[`gatsby`, `application`, `react`]} />
      {renderAst(homeHTML.htmlAst)}
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object,
};

export default IndexPage;
