import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from './components/App';
// Import CSS
import styl from './styles/style.styl';
//import css from './styles/style.css';
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component name={"Krishnaaaa"}/>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept()
}