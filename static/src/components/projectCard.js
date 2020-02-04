import React from 'react';
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
  h3 {
    text-align: center;
  }
  ul {
    margin: 0;
  }
  .container {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    align-items: center;
  }
  .grid-img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

const getProjectCard = ({
  project_name,
  org_url,
  po_name,
  description,
  description_link,
  logo_link,
}) => {
  if (project_name) {
    // Project exists
    return (
      <ProjectCard key={project_name}>
        <h2>{project_name}</h2>
        <Line />
        <div class="container">
          {/* Only display logo's if they exist */}
          {logo_link && <div><img src={logo_link} alt="Project Logo" class="grid-img" /></div>}
          <div>
            <ul>
              <li>
                Description: {description}{' '}
                <a href={description_link}>
                  Click here for a more detailed description.
                </a>
              </li>
              <li>Team Members: {po_name}</li>
              <li>Link: {org_url}</li>
            </ul>
          </div>
        </div>
      </ProjectCard>
    );
  } else {
    // Project does not exist
    return (
      <ProjectCard>
        <h3>Sorry, this project does not exist.</h3>
      </ProjectCard>
    );
  }
};

const ProjectDetails = ({project}) => {
  return getProjectCard(project);
};

export default ProjectDetails;
