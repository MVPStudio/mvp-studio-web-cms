import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ShowcaseCard = styled.div`
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

const getShowcaseCard = ({project_name,org_url,po_name,description,description_link}) => (
  <ShowcaseCard key={project_name}>
        <div>
          <a href={org_url}>
            <h2>{project_name}</h2>
          </a>
          <ul>
            <li>Description: {description}</li>
            <li>Team Members: {po_name}</li>
            <li>Link: {description_link}</li>
          </ul>
        </div>
      </ShowcaseCard>
)

const ShowcaseCards = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost/api/projects');
      setProjects(await response.json());
    }
    fetchData();
  }, [])
  return (
    <div>
      {projects.map(getShowcaseCard)}
    </div>
  )
};

export default ShowcaseCards;
