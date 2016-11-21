import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
// import HomePage from './components/home';
import HomePage from "./components/home/HomePage.jsx";
import NotFound from './components/NotFound.jsx';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={HomePage}/>
        <Route path='*' component={NotFound}/>
    </Route>
);
