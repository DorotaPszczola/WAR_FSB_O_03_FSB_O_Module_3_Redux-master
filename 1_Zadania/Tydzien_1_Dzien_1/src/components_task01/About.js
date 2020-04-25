import React, { Component } from "react";
import ReactDOM from "react-dom";
import AboutUs from "./AboutUs";
import AboutCompany from "./AboutCompany";

const About = () => {
    return (
        <>
            <div>
                <h2> o nas</h2>
            </div>
            <AboutUs />
            <AboutCompany />
        </>
    )
};
export default About