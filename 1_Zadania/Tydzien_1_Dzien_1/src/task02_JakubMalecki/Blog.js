import React, { Component } from "react";
import { useHistory, generatePath } from 'react-router-dom'

const Blog = () => {
    const history = useHistory();

    const handleOnClick = () => {
        history.push(generatePath('/pricing/:value', { value: 12345 }))
    }
    return (
        <h1><button onClick={handleOnClick}>portot do glównej</button></h1>
    )
}

export default Blog;