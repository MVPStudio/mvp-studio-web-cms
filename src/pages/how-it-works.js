import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const HowItWorks = () => (
  <Layout>
    <SEO title="How It Works" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { title: { eq: "How It Works" } }) {
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
)

export default HowItWorks
