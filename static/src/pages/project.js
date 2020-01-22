import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import ProjectDetails from '../components/projectCard';

const Project = () => (
  <Layout>
    <Router>
      <ProjectDetails path="/project/:projectID" />
    </Router>
  </Layout>
);

export default Project;
