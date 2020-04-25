import React from "react";
import { Provider } from "react-redux";
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch,
    HashRouter
} from "react-router-dom";
import Recipes from "./Recipes"
import store from "../redux/store";
import SingleProduct from "./Recipes/SingleProduct";
import Add from './Recipes/Add'
import Layout from "./Layout";
import Last from './Home';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
            <Layout>
                <Switch>
                    <Route exact path="/recipes" component={Recipes}/>
                    <Route path="/recipes/add" component={Add}/>
                </Switch>
                <Last />
                </Layout>
            </Router>
        </Provider>
    )
};

export default App;
