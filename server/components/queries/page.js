import gql from 'graphql-tag';

export default gql`
  query Page($slug: String!) {
    pages(q:$slug) {
      id
      sys {
        id
      }
      title
      sections {
        sys {
          id
        }
        __typename
      }
    }
  }
`;
