import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import axios from 'axios';
import 'tw-elements';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'antd/dist/antd.min.css'

axios.defaults.baseURL = 'https://stgcompany.hri.mybizmo.com/';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();