import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const teamData = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Team" } }) {
        edges {
          node {
            data {
              Name
              Title
              Avatar {
                localFiles {
                  childImageSharp {
                    fixed(width: 150, quality: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return teamData.allAirtable.edges;
};
