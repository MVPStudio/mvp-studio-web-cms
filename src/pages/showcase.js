import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
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

const Showcase = () => {
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
  console.log(showcaseCards);

  return (
    <Layout>
      <SEO title="How It Works" keywords={[`gatsby`, `application`, `react`]} />
      <h2>Check out these cool projects</h2>
      <p>
        This page will have cards generated for each project, perhaps using the
        gear motif if we are still into that...
      </p>
      <hr />
      {showcaseCards}
    </Layout>
  );
};

export default Showcase;
