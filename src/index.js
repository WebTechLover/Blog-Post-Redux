import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/reducer/index';
import App from '../src/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer)
render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
)