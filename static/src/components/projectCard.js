import React, {useState, useEffect} from 'react';
import { Line } from '../utilities';
import styled from 'styled-components';

const ProjectCard = styled.div`
  margin: 0.5rem auto;
  align-items: center;
  a {
    text-align: center;
  }
  h2 {
    margin-bottom: 0.1rem;
  }
  ul {
    margin: 0;
  }
`;

const getProjectCard = ({project_name, org_url, po_name, description, description_link}) => {
  if (project_name) {
    // Project exists
    return (
      <ProjectCard key={project_name}>
          <h2>{project_name}</h2>
          <Line />
          <ul>
            <li>Description: {description} <a href={description_link}>Click here for a more detailed description.</a></li>
            <li>Team Members: {po_name}</li>
            <li>Link: {org_url}</li>
          </ul>
      </ProjectCard>
    );
  } else {
    // Project does not exist
    return (<h3>Sorry, this project does not exist.</h3>);
  }
}

const ProjectDetails = (props) => {
  const [project, setProject] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/project/${props.projectID}`);
      setProject(await response.json());
    }
    fetchData();
  }, [])
  return (
      <div>
        {getProjectCard(project)}
      </div>
  )
};

export default ProjectDetails;
