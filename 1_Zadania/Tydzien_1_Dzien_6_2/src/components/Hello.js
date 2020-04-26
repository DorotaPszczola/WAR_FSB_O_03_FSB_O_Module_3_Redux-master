import React from "react";
import { NavLink } from "react-router-dom";

const Hello = () => {
    return (
        <>
            <h1>Witaj! Wybierz aplikację</h1>
            <ul>
                <li><NavLink to="/counter">Licznik</NavLink></li>
                <li><NavLink to="/list" >Lista zakupów</NavLink> </li>
                <li><NavLink to="/articles">Lista artykułów</NavLink> </li>
            </ul>
        </>
    )
}

export default Hello;
