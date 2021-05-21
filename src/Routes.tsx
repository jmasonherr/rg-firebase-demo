import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from "./firebaseAuth";
import App from "./App";
import {Login} from "./Login";

function PageNotFound() {
    return (
        <h1>
            404
        </h1>
    );
}
const Routes = () => {

    return (
        <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={App} />
            <PrivateRoute path="/dashboard" component={App} />
            <Route component={PageNotFound} />
        </Switch>
        </Router>
    );
};

export default Routes;