import React from 'react';
import {connect} from 'react-redux';

import PositionWrapper from './containers/PositionWrapper.jsx';
import {changePositionActionCreator} from './actions'


const mapStateToProps = (state) => {           // map redux state to component props
    return {
        pos: state.pos
    }
};

const mapDispatchToProps = (dispatch) => {     // map redux actions to component props
    return {
        handleClickPos1: () => dispatch(changePositionActionCreator('position1')),
        handleClickPos2: () => dispatch(changePositionActionCreator('position2')),
        handleClickPos3: () => dispatch(changePositionActionCreator('position3')),
        handleClickPos4: () => dispatch(changePositionActionCreator('position4'))
    }
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(PositionWrapper);

export default App;
