import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import { Line } from '../utilities';
import ProjectDetails from '../components/projectCard';
import FormSubmitAnimation from '../forms/formSubmitAnimation';
import VolunteerFormContainer from '../forms/VolunteerFormContainer';
import {AnimationWrapper, HomeCard} from '../components/GearButtons';
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

const InvolvedGear = () => (
  <HomeCard>
    <AnimationWrapper >
      <GearHammer className="gearsvg,gear"/>
      <h3>Get Involved!</h3>
    </AnimationWrapper>
  </HomeCard>
);

const Project = () => (
  <Layout>
    <Router>
      <ProjectDetails path="/project/:projectID"/>
    </Router>
    <Line />
    <InvolvedGear />
  </Layout>
);

export default Project;
