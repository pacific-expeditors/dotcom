import gql from 'graphql-tag';

export default gql`
  query Map($id: ID!) {
    map(id:$id) {
      id
      src
      caption
      callToActionUrl
      callToActionText
    }
  }
`;
