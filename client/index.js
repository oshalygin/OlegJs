/* eslint-disable import/default */
import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';

import './images/favicon.ico';
import './images/apple-touch-icon.png';
import './images/favicon-16x16.png';
import './images/favicon-32x32.png';

import './pageScroll';

import './styles/styles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(<Provider store={store}>
    <Router history={history} routes={routes}/>
</Provider>, document.getElementById('application'));
