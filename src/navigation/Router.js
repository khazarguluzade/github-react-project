import React, { memo } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import UserDetail from '../pages/UserDetail'
import Home from '../pages/Home'


export default memo(() => (
    <Router>
        <Switch>
            <Route path="/UserDetail/:name">
                <UserDetail />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
))
