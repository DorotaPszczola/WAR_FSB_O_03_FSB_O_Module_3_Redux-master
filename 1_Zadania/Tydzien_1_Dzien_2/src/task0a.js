import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom"

class Home extends Component {
    render() {
        return <h1>Witaj!</h1>
    }
}

class HelloYou extends Component {
    render() {
        console.log(this.props.match)
        const name = this.props.match.params.name;
        return <h1>Witaj, {name} </h1>
    }
}

class CheckAge extends Component {
    render() {
        //renderowanie warunkowe
        const { age } = this.props.match.params // lepiej tak niż w linijce 19
        const isAdult = age >= 18;
        return (
            <h1> {isAdult ? 'Pełnoletni' : "Niepełnoletni"} </h1>
        )
    }
}

class App extends Component {
    render() {
        const activeStyleLink = {fontWeight: 'bold'}
        return (
            <Router>
                <ul>
                    <li><NavLink exact to='/' activeStyle={activeStyleLink}> Home </NavLink></li>
                    <li><NavLink to='/hello/Pawel' activeStyle={activeStyleLink}> HelloYou </NavLink></li>
                    <li><NavLink to='/checkage/50' activeStyle={activeStyleLink}> CheckAge </NavLink></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/hello/:name' component={HelloYou} />
                    <Route path='/checkage/:age' component={CheckAge} />
                </Switch>
            </Router>
        )
    }
}
// musi być exact w NavLink żeby tylko jeden link miał style (?)

ReactDOM.render(<App />, document.getElementById("app"));
