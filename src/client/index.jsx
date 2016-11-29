'use strict';
import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider } from 'react-redux';
// import configureStore from '../common/store/configureStore'
// import App from '../common/containers/App'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

class App extends Component {
  render() {
    return (
      <Provider>
        <h1>Dot</h1>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('app'));