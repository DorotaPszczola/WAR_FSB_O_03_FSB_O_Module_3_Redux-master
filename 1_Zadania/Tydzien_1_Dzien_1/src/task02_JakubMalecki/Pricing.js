import React, { Component } from "react";
import { useParams } from 'react-router-dom'

const Pricing = () => {
    const { value } = useParams()
    return (
    <h1>{value || "miała baba koguta"}</h1>
    )
}

export default Pricing;