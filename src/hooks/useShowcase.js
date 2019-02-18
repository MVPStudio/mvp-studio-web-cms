import { useStaticQuery, graphql } from 'gatsby';

export default params => {
  const showcaseProjects = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Showcase" } }) {
        edges {
          node {
            data {
              Name
              Approved
              Description
              URL
              TeamMembers
              ScreenShot {
                localFiles {
                  childImageSharp {
                    fixed(width: 200) {
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
  `).allAirtable.edges.filter(({ node }) => node.data.Approved);
  if (params === 'all') {
    return showcaseProjects;
  }
  return showcaseProjects.map(({ node }) => ({
    value: node.data.Name,
    label: node.data.Name,
  }));
};
