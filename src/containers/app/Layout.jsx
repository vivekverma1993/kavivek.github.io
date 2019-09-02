import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import PubSub from 'pubsub-js';
import Confetti from 'react-dom-confetti';

import { Dummy, Flex } from '../../design/components/index';
import NavBar from '../navbar/Index';
import { getObjectClassNames } from '../../design/utils/designUtils';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const config = {
  angle: 90,
  spread: 90,
  startVelocity: 80,
  elementCount: 150,
  dragFriction: 0.1,
  duration: 5000,
  stagger: 0,
  width: '20px',
  height: '20px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
};

const classes = getObjectClassNames({
  confetti: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: 1000,
    pointerEvents: 'none'
  }
});


class Layout extends Component {
  static propTypes = {};

  state = {
    showNavbar: false,
    active: false
  };

  componentWillMount() {
    PubSub.subscribe('hideNavbar', () => {
      this.setState({
        showNavbar: false
      });
    });

    setInterval(()=> {
      this.setState({
        active: !this.state.active
      })
    }, 3000);
  }

  render() {
    const { showNavbar } = this.state;
    return [
      showNavbar ? (
        <NavBar key={`App/${this.props.location.pathname}/Navbar`} />
      ) : null,
      <React.Fragment key={'app/Layout/children'}>
        <Flex className={classes.confetti}>
          <Confetti active={this.state.active} config={config} />
        </Flex>
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
