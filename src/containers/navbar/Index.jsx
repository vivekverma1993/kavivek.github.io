import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import MainNavBar from './MainNavBar';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class Index extends Component {
  displayName = '@NavBar/Index';

  static propTypes = {
    user: PropTypes.object
  };

  static defaultProps = {};

  state = {
    mobileMenuOpen: false,
    showLogoutMenu: false
  };

  onMouseEvent = (showLogoutMenu, time = 500) => {
    setTimeout(() => {
      this.setState({ showLogoutMenu });
    }, time);
  };

  rightNavigationOptions = () => {
    return [
    ];
  };

  onNavClick = path => {
    this.props.history.push(path);
  };

  toggleSideToolBox = () => {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    });
  };

  openPage = link => {
    this.props.history.push(link);
  };

  render() {
    return (
      <MainNavBar
        user={this.props.user ? this.props.user.toJS() : {}}
        mobileMenuOpen={this.state.mobileMenuOpen}
        toggleSideToolBox={this.toggleSideToolBox}
        rightNavigationOptions={this.rightNavigationOptions()}
        onNavClick={this.onNavClick}
        openPage={this.openPage}
      />
    );
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(Index);
