import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import Home from '../../components/home/Index';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class Index extends Component {
  static propTypes = {
    source: PropTypes.string
  };

  static defaultProps = {
    source: ''
  };

  render() {
    return <Home source={this.props.source} />;
  }
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Index);
