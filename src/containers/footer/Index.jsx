import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import Footer from '../../components/footer/Index';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class Index extends Component {
  openLink = (link) => {
    window.open(link);
  };

  render() {
    return <Footer openLink={this.openLink} />;
  }
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Index);
