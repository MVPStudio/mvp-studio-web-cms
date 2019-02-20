import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ShowcaseCards from '../components/showcaseCards';

const Showcase = () => (
  <Layout>
    <SEO title="How It Works" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Check out these cool projects</h2>
    <hr />
    <ShowcaseCards />
  </Layout>
);

export default Showcase;
