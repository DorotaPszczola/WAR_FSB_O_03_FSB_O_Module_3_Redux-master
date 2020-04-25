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
import Unknown from "./Unknown";

// jak to zrobić, żeby po wejściu na nieznany adres renderować komponent Unknown
// i tylko ten komponent, tzn. bez głównej treści "Aplikacja React..."

const App = () => {
    let styles = {}
    styles.sidebar = {
        position: "fixed",
        left: 0,
        top: 0,
        background: "gray",
        width: 200,
        height: '100%'
    }

    styles.content = {
        marginLeft: 200
    }

    return (
        <Router>
            <div>
                <h1 style={styles.content}>Aplikacja React z React Router</h1>
                <nav style={styles.sidebar}>
                    <ul>
                        <li><NavLink to="/" activeStyle={{background: "red"}}>Home</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/pricing">Prcing</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div style={styles.content}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/pricing/:value" component={Pricing} />
                    <Route path="*" component={Unknown} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;