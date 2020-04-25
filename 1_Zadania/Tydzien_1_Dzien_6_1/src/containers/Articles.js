import React from 'react';
import { connect } from 'react-redux';

import Articles from '../components/Articles';
import { addArticle } from '../redux/actions'

const mapStateToProps = state => ({
    articles: state.articles,
    users: state.users
})

const mapDispatchToProps = dispatch => ({
    onAdd: payload => dispatch(addArticle(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
