import React, {useState, useEffect} from 'react';
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


const ProjectDetails = ({location}) => {
//   const [project, setProject] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('/api/projects');
//       setProjects(await response.json());
//     }
//     fetchData();
//   }, [])
  return (
      <div>
        Hello
      </div>
  )
};

export default ProjectDetails;
