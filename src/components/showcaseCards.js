import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import useShowcase from '../hooks/useShowcase';

const ShowcaseCard = styled.div`
  width: 700px;
  margin: 0.5rem auto;
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 1rem;
  a {
    text-align: center;
  }
`;

const ShowcaseCards = () => {
  const showcaseCards = useShowcase('all').map(
    ({
      node: {
        data: { Name, Description, URL, ScreenShot, TeamMembers },
      },
    }) => (
      <>
        <ShowcaseCard key={Name}>
          <Img fixed={ScreenShot.localFiles[0].childImageSharp.fixed} />
          <div>
            <a href={URL}>
              <h2>{Name}</h2>
            </a>
            <p>Description: {Description}</p>
            <p>Team Members: {TeamMembers}</p>
            <p>Link: {URL}</p>
          </div>
        </ShowcaseCard>
      </>
    ),
  );
  return <div>{showcaseCards}</div>;
};

export default ShowcaseCards;
