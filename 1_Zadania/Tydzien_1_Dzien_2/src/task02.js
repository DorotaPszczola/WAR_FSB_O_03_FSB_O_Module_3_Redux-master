import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Switch,
    Link,
    NavLink,
    Route
} from 'react-router-dom'

const validValues = ["www", "seo", "shop"];


class ServiceInfo extends Component {
    render() {
        const { service } = this.props.match.params;
        const isValid = validValues.includes(service);
        //renderowanie warunkowe
        return isValid ? (
            <h1>Proponujemy usługę: {service}</h1>
        ) : <Link to="/">Powrót do strony głównej</Link>
    }
}

class Home extends Component {
    render() {
        return (
            <ul>
                <li><NavLink exact to='/services/www' activeStyle={{color: "red"}}> www </NavLink></li>
                <li><NavLink to='/services/seo' activeStyle={{color: "green"}} > seo </NavLink></li>
                <li><NavLink to='/services/shop' activeStyle={{backgroundColor: "green", color: "white"}} > shop </NavLink></li>
            </ul>
        )
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                {/* <h1  >Witaj</h1> */}
                {/* <ul>
                    <li><NavLink exact to='/services/www'> www </NavLink></li>
                    <li><NavLink to='/services/seo' > seo </NavLink></li>
                    <li><NavLink to='/services/shop' > shop </NavLink></li>
                </ul> */}
                <Route  path="/" component={Home} />

                <Switch>
                    <Route exact path="/services/:service" component={ServiceInfo} />
                    {/* teraz menu jest tylko na stronie głównej bo jest w <Switch>, gdyby były tutaj, to by były na każdej podstronie */}
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
