import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import store from './stores/index';
import AppContainer from './containers/app/Index';

import './index.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ParallaxProvider>
            <AppContainer />
          </ParallaxProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
