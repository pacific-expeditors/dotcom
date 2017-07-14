import gql from 'graphql-tag';

export default gql`
  query IntroParagraph($id: ID!) {
    introParagraph(id:$id) {
      id
      heading
      content
      callToActionLink
      callToActionText
    }
  }
`;
