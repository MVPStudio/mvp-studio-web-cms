import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import useTeam from '../hooks/useTeam';
import { red, elevation } from '../utilities';

const TeamCard = styled.div`
  text-align: center;
  width: 225px;
  background: ${red};
  padding: 0.5rem;
  border-radius: 3px;
  ${elevation[2]};
  box-shadow: inset 0px 0px 136px 0px rgba(0, 0, 0, 0.75);
`;

const StyledTeamCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
`;

const TeamCards = () => {
  const teamCards = useTeam().map(
    ({
      node: {
        data: { Name, Title, Avatar },
      },
    }) => (
      <TeamCard key={Name}>
        <Img fixed={Avatar.localFiles[0].childImageSharp.fixed} />
        <h3>{Name}</h3>
        <p>{Title}</p>
      </TeamCard>
    ),
  );
  return (
    <>
      <hr />
      <h2>Team</h2>
      <StyledTeamCards>{teamCards}</StyledTeamCards>
    </>
  );
};

export default TeamCards;
