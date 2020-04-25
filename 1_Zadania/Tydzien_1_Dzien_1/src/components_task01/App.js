import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Main from "./Main";
import AboutUs from "./AboutUs";
import AboutCompany from "./AboutCompany";
import About from "./About";

const App = () => {

    return (
        <HashRouter>
            <div>
                <h1>Aplikacja React z React Router</h1>
            </div>
            <Route exact path="/" component={Main} />
            <Route path="/about/us" component={AboutUs} />
            <Route path="/about/company" component={AboutCompany} />
            <Route exact path="/about" component={About} />
        </HashRouter>
    )
}

export default App;
