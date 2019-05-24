import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import App from './App';
import Opportunities from '../src/components/dashboard/opportunities'

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />        
            <Route path="/app" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/opportunities" component={Opportunities} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />

        </Switch>
    </Router>
)