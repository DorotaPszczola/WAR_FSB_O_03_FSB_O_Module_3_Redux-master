import React from 'react';
import { connect } from "react-redux"
import Articles from "../components/Articles"
import { addArticle } from "../redux/actions"

//laczymy articles zeby przekazywac je ze state'a do props

const mapStateToProps = state => ({
    articles: state.articles,
    users: state.users
})
//dispatch wykorzystuje onAdd (w Articleinput.js)
const mapDispatchToProps = dispatch => ({
    onAdd: payload => dispatch(addArticle())
})
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
