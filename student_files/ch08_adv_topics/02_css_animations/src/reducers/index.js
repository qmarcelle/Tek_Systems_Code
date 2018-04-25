import changePositionReducer from './changePositionReducer'

const rootReducer = (state={}, action) => {

    // leave the log statement for viewing purposes
    console.log('Root reducer: prev. state: ' + JSON.stringify(state) +
                ', action: ' + JSON.stringify(action));
    return {
        pos: changePositionReducer(state.pos, action),
    }
};


export default rootReducer;