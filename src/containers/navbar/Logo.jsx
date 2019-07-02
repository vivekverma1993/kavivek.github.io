import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LogoComponent from '../../components/navbar/Logo';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class Logo extends Component {
  static propTypes = {
    sideBarOpen: PropTypes.bool,
    onNavClick: PropTypes.func,
    onGetAppClick: PropTypes.func
  };

  render() {
    return (
      <LogoComponent
        sideBarOpen={this.props.sideBarOpen}
        onNavClick={this.props.onNavClick}
        onGetAppClick={this.props.onGetAppClick}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Logo);
