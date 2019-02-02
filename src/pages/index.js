import React from 'react'
import {StaticQuery, graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="MVP Studio" keywords={[`gatsby`, `application`, `react`]} />
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
)

export default IndexPage
