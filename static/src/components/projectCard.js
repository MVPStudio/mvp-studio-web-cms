import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import { Line } from '../utilities';
import styled from 'styled-components';

const ProjectCard = styled.div`
  margin: 0.5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(200px, auto));
  grid-gap: 1rem;
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

const getProjectCard = ({project_name, org_url, po_name, description, description_link}) => (
  <ProjectCard key={project_name}>
    <div>
      <h2>{project_name}</h2>
      <Line />
      <ul>
        <li>Description: {description}</li>
        <Link to={description_link}><p>Click here for a more detailed description.</p></Link>
        <li>Team Members: {po_name}</li>
        <li>Link: {org_url}</li>
      </ul>
    </div>
  </ProjectCard>
)

const ProjectDetails = (props) => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/project/${props.projectID}`);
      setProject(await response.json());
    }
    fetchData();
  }, [])
  return (
      <div>
        {project.map(getProjectCard)}
      </div>
  )
};

export default ProjectDetails;
