import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import PubSub from 'pubsub-js';

import { Dummy } from '../../design/components/index';
import NavBar from '../navbar/Index';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class Layout extends Component {
  static propTypes = {};

  state = {
    showNavbar: false
  };

  componentWillMount() {
    PubSub.subscribe('hideNavbar', () => {
      this.setState({
        showNavbar: false
      });
    });
  }

  render() {
    const { showNavbar } = this.state;
    return [
      showNavbar ? (
        <NavBar key={`App/${this.props.location.pathname}/Navbar`} />
      ) : null,
      <React.Fragment key={'app/Layout/children'}>
        <Dummy>{this.props.children}</Dummy>
      </React.Fragment>
    ];
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(Layout);
