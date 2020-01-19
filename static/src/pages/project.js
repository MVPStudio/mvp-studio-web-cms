import React, { useState } from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import { Line } from '../utilities';
import ProjectDetails from '../components/projectCard';
import FormSubmitAnimation from '../forms/formSubmitAnimation';
import VolunteerFormContainer from '../forms/VolunteerFormContainer';
import { AnimationWrapper, HomeCard } from '../components/GearButtons';
import GearHammer from '../images/gearHammer.svg';

const renderForm = () => (
  <FormSubmitAnimation>
    {({ setFormState, setSubmitResponse }) => (
      <VolunteerFormContainer
        setFormState={setFormState}
        setSubmitResponse={setSubmitResponse}
      />
    )}
  </FormSubmitAnimation>
);

const InvolvedGear = ({ onClick }) => (
  <HomeCard>
    <AnimationWrapper onClick={onClick}>
      <GearHammer className="gearsvg,gear" />
      <h3>Get Involved!</h3>
    </AnimationWrapper>
  </HomeCard>
);

const Project = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Layout>
      <Router>
        <ProjectDetails path="/project/:projectID" />
      </Router>
      <Line />
      <InvolvedGear
        onClick={() => {
          setShowForm(!showForm);
        }}
      />
      {showForm && renderForm()}
    </Layout>
  );
};

export default Project;
