import { render } from 'react-dom';
import React from 'react';
import Home from './components/Home.jsx';
import { Provider } from 'react-redux';
import store from './store/reducers';


render(
  <Provider store={store}>
    <Home>
    </Home>
  </Provider>,
  document.getElementById('root')
);