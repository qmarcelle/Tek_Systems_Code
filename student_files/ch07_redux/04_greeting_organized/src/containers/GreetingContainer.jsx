import React from 'react'
import { connect } from 'react-redux'
import Greeting from '../components/Greeting.jsx'

import {changeNameActionCreator, greetingActionCreator} from '../actions/index'


const mapStateToProps = (state) => {           // map redux state to component props
    return {
        name: state.name,
        greeting: state.greet
    }
};

const mapDispatchToProps = (dispatch) => {     // map redux actions to component props
    return {
        handleNameClick: () => dispatch(changeNameActionCreator()),
        handleGreetClick: () => dispatch(greetingActionCreator())
    }
};


const GreetingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);

export default GreetingContainer;
