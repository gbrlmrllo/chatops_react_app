import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import App from './App';
import store from './models/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
