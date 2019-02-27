import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import useTeam from '../hooks/useTeam';
import { red, elevation, Line } from '../utilities';

const TeamCard = styled.div`
  text-align: center;
  width: 225px;
  background: ${red};
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 3px;
  ${elevation[2]};
  box-shadow: inset 0px 0px 136px 0px rgba(0, 0, 0, 0.75);

  p {
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.75));
    font-size: 1rem;
  }
`;

const StyledTeamCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
`;

const TeamCards = () => {
  const teamCards = useTeam().map(
    ({
      node: {
        data: { Name, Title, Avatar },
      },
    }) => (
      <TeamCard key={Name}>
        <Img
          fixed={Avatar.localFiles[0].childImageSharp.fixed}
          style={{ width: '100%', height: '200px' }}
        />
        <h3>{Name}</h3>
        <Line />
        <p>{Title}</p>
      </TeamCard>
    ),
  );
  return (
    <>
      <Line />
      <h2>Team</h2>
      <StyledTeamCards>{teamCards}</StyledTeamCards>
    </>
  );
};

export default TeamCards;
