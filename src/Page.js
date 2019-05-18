import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import App from './App';
import Portfolio from '../src/components/dashboard/portfolio'

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />        
            <Route path="/app" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />

        </Switch>
    </Router>
)