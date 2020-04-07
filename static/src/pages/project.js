import React, { useState, useEffect } from 'react';
import { Router, Redirect} from '@reach/router';
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
  // https://www.postgresql.org/docs/9.3/datatype-numeric.html
  const PG_SERIAL_MIN = 1;
  const PG_SERIAL_MAX = 2147483647;
  const reProj = /^project\/(\d{1,10})\/?/;
  const path = reProj.exec(props["*"]);
  // Check if we have a proper path with an id
  console.log(path)
  if(path && path[1]) {
    const projectID = parseInt(path[1], 10);
    console.log(projectID);
    if(projectID > 0 && projectID <= PG_SERIAL_MAX) {
      return -1
    }
  } else {
    return -1;
  }
  console.log(typeof path[1]);
  // Return true if id is not undefined AND
  // we actually have a project id afterwards
  return 1;
}

const Project = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [project, setProject] = useState({});
  const projectID = regex(props);
  useEffect(() => {
    async function fetchData() {
      console.log(projectID)
      if (projectID != -1) {
        const response = await fetch(`/api/project/${projectID}`);
        setProject(await response.json());
      } else {
        console.log("here");
        return <Redirect to='/404' />
      }
    }
    fetchData();
  }, []);
  return (
    <Layout>
      <Router>
        <ProjectDetails path="/project/:projectID" project={project}/>
        {/* <ProjectOwnerAdmin path="/project/:projectID/edit/:key" project={project}/> */}
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
