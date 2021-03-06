import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './store';

import './assets/css/reset.css';
import 'typeface-roboto';
import 'flexboxgrid/css/flexboxgrid.css';
import './assets/css/index.css';
import App from './containers/app/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
