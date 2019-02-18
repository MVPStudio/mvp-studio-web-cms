import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const showcaseProjects = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Showcase" } }) {
        edges {
          node {
            data {
              Name
              Approved
            }
          }
        }
      }
    }
  `);
  return showcaseProjects.allAirtable.edges
    .filter(({ node }) => node.data.Approved)
    .map(({ node }) => ({
      value: node.data.Name,
      label: node.data.Name,
    }));
};
