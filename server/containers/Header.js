/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import get from 'lodash.get';
import Header from '../components/Header';
// import SubPageHeader from '../components/SubPageHeader';

class HeaderContainer extends Component {
  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

  render() {
    const { data } = this.props;
    const header = get(data, 'header', {});

    return (<div></div>)

    // return (
    //   <Header
    //     logo={header.logo}
    //     mobileLogo={header.mobileLogo}
    //     siteTitle={header.siteTitle} />
    // );
  }
}

export default graphql(gql`
  query Header($id: ID!) {
    header(id:$id) {
      id
      logo
      siteTitle
      mobileLogo
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(HeaderContainer);
