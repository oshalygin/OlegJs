/* eslint-disable import/default */
import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';

import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/jquery.backstretch/jquery.backstretch.min';
import '../node_modules/jquery.simple-text-rotator/jquery.simple-text-rotator.min';
import '../node_modules/wowjs/dist/wow';
import '../node_modules/smoothscroll/smoothscroll.min';

import './images/favicon.ico';
import './images/apple-touch-icon.png';
import './images/favicon-16x16.png';
import './images/favicon-32x32.png';

// import './pageScroll';

import './styles/simpletextrotator.css';
import './styles/animate.css';
import './styles/styles2.css';


const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(<Provider store={store}>
    <Router history={history} routes={routes}/>
</Provider>, document.getElementById('application'));
