import React, { memo } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserDetail from '../pages/UserDetail'
import FollowerModal from '../pages/FollowerModal'
import Home from '../pages/Home'



export default memo(() => (
    <Router>
        <Switch>
            <Route path="/UserDetail">
                <UserDetail />
            </Route>
            <Route path="/FollowerModal">
                <FollowerModal />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
))
