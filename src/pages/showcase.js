import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Showcase = () => (
  <Layout>
    <SEO title="How It Works" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Check out these cool projects</h2>
    <p>
      This page will have cards generated for each project, perhaps using the
      gear motif if we are still into that...{' '}
    </p>
  </Layout>
);

export default Showcase;
