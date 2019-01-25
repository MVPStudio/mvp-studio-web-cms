import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const WhoWeAre = () => (
  <Layout>
    <SEO title="Who We Are" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { title: { eq: "Who We Are" } }) {
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

export default WhoWeAre
