import gql from 'graphql-tag';

export default gql`
  query Footer($id: ID!) {
    footer(id:$id) {
      siteTitle
      navLinks {
        slug
        title
      }
    }
  }
`;
