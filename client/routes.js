import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from './components/Application.jsx';

import HomePage from './components/home';
import NotFound from './components/NotFound.jsx';

export default (
  <Route path="/" component={Application}>
    <IndexRoute component={HomePage} />
    <Route path="*" component={NotFound} />
  </Route>
);
