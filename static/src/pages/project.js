import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import { Line } from '../utilities';
import ProjectDetails from '../components/projectCard';
import FormSubmitAnimation from '../forms/formSubmitAnimation';
import VolunteerFormContainer from '../forms/VolunteerFormContainer';

const Project = () => (
  <Layout>
    <Router>
      <ProjectDetails path="/project/:projectID" />
    </Router>
    <Line />
    <h2 style={{ textAlign: 'center' }}>Get Involved!</h2>
    <FormSubmitAnimation>
      {({ setFormState, setSubmitResponse }) => (
        <VolunteerFormContainer
          setFormState={setFormState}
          setSubmitResponse={setSubmitResponse}
        />
      )}
    </FormSubmitAnimation>
  </Layout>
);

export default Project;
