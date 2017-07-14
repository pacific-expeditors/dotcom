import gql from 'graphql-tag';

export default gql`
  query Header($id: ID!) {
    header(id:$id) {
      siteTitle
      navLinks {
        slug
        title
      }
    }
  }
`;
