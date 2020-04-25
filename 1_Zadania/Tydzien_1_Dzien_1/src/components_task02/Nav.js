import React, { Component } from "react";
import {
    HashRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <h1>Aplikacja React z React Router</h1>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/blog">Blog</Link> </li>
                <li><Link to="/pricing">Cennik</Link> </li>
            </ul>
        </div>
    )
}

export default Nav;