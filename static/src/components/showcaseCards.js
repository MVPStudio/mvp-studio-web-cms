import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import useShowcase from '../hooks/useShowcase';

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

const ShowcaseCards = () => {
  const showcaseCards = useShowcase('all').map(
    ({
      node: {
        data: { Name, Description, URL, ScreenShot, TeamMembers },
      },
    }) => (
      <ShowcaseCard key={Name}>
        <Img
          className="screenshot"
          fixed={ScreenShot.localFiles[0].childImageSharp.fixed}
          style={{ margin: '0 auto' }}
        />
        <div>
          <a href={URL}>
            <h2>{Name}</h2>
          </a>
          <ul>
            <li>Description: {Description}</li>
            <li>Team Members: {TeamMembers}</li>
            <li>Link: {URL}</li>
          </ul>
        </div>
      </ShowcaseCard>
    ),
  );
  return <div>{showcaseCards}</div>;
};

export default ShowcaseCards;