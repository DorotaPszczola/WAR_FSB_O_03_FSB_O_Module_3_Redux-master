import React, {Component} from "react";
import ReactDOM from "react-dom";
import App from "../src/components_task01/App"
import {
    HashRouter as Router,
    Route,
    Link,
     Switch,
     NavLink,
     withRouter,
     useHistory

} from "react-router-dom"

ReactDOM.render(<App/>, document.getElementById("app"));
