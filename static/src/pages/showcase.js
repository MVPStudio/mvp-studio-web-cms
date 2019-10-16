import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ShowcaseCards from '../components/showcaseCards';
import { Line } from '../utilities';

const Showcase = () => (
  <Layout>
    <SEO title="How It Works" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Check out these cool projects</h2>
    <Line />
    <ShowcaseCards />
  </Layout>
);

export default Showcase;
