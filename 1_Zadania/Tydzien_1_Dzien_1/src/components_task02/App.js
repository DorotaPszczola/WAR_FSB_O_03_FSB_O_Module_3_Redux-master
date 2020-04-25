import React, { Component } from "react";
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Home from "./Home";
import Blog from "./Blog";
import Pricing from "./Pricing";
import NotFound from "./NotFound";
import Nav from "./Nav";

const App = () => {

    return (
        <Router>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/pricing" component={Pricing} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App