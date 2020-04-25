import React from 'react';
import { connect } from 'react-redux';

import UserInput from '../components/UserInput';
import { addUser } from '../redux/actions'

const mapDispatchToProps = dispatch => ({
    onUserAdd: user => dispatch(addUser(user))
})

export default connect(null, mapDispatchToProps)(UserInput);
