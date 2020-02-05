import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import { Line } from '../utilities';
import ProjectDetails from '../components/projectCard';
import FormSubmitAnimation from '../forms/formSubmitAnimation';
import VolunteerFormContainer from '../forms/VolunteerFormContainer';
import { AnimationWrapper, HomeCard } from '../components/GearButtons';
import GearHammer from '../images/gearHammer.svg';

const renderForm = (projectID) => (
  <FormSubmitAnimation>
    {({ setFormState, setSubmitResponse }) => (
      <VolunteerFormContainer
        projectID = {projectID}
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

const regex = (props) => {
  const re = /^project\/?(\d{1,5}$)/;
  const id = re.exec(props["*"]);
  return id && id[1];
}

const Project = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [project, setProject] = useState({});
  const projectID = regex(props);
  useEffect(() => {
    async function fetchData() {
      if (projectID) {
        const response = await fetch(`/api/project/${projectID}`);
        setProject(await response.json());
      }
    }
    fetchData();
  }, []);
  return (
    <Layout>
      <Router>
        <ProjectDetails path="/project/:projectID" project={project}/>
      </Router>
      {project.project_name && <>
        <Line />
        <InvolvedGear
          onClick={() => {
            setShowForm(!showForm);
          }}
        />
      </>}
      {showForm && renderForm(project.id)}
    </Layout>
  );
};

export default Project;
