import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Routes from './Routes';

const mapStateToProps = state => {
  return {
    rehydrated: state._persist ? state._persist.rehydrated : false
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const muiTheme = createMuiTheme({
  palette: { primary1Color: '#b9a3d9' }
});

class AppIndex extends Component {
  static propTypes = {};

  static defaultProps = {
    isStateRehydrated: false
  };
  //
  // componentWillMount() {
  //   ReactGA.initialize('UA-86894128-1');
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.location.pathname !== nextProps.location.pathname) {
  //     ReactGA.pageview(window.location.pathname + window.location.search);
  //   }
  // }

  componentDidMount() {
    this.props.history.listen(() => {
      window.scrollTo(0, 0); // scroll to top of page
    });
  }

  componentWillUnmount() {}

  render() {
    // const isSignedIn = this.isUserSignedIn();
    return this.props.rehydrated ? (
      <div>
        <MuiThemeProvider theme={muiTheme} key={'App/Index/MUIThemeProvider'}>
          <Routes />
        </MuiThemeProvider>
      </div>
    ) : null;
  }
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AppIndex);
