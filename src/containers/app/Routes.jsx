import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Layout from './Layout';
import HomePage from '../home/Index';

class Routes extends Component {
  static propTypes = {
    isSignedIn: PropTypes.bool
  };

  static shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <Layout key={'Routes/Layout'}>
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/technology" component={() => <HomePage source={'technology'} />} />
          <Route exact path="/products" component={() => <HomePage source={'products'} />} />
          <Route exact path="/team" component={() => <HomePage source={'team'} />} />
        </Switch>
      </Layout>
    );
  }
}

export default compose(withRouter)(Routes);
