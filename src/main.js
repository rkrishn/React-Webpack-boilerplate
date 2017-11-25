import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from './components/App';

ReactDOM.render(
  <AppContainer>
  <App name={"bujjii Akula"}/>
  </AppContainer>,
  document.getElementById('root')
);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => { render(
    <AppContainer>
    <App name={"bujji Akula"}/>
    </AppContainer>,
    document.getElementById('root')
  ) })
}