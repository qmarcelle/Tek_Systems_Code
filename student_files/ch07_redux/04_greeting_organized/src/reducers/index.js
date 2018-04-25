import changeNameReducer from './changeNameReducer'
import greetingReducer from './greetingReducer'

const rootReducer = (state={}, action) => {
    // leave this here to view reducer state/actions in console
    console.log('Root reducer: state: ' + JSON.stringify(state) + ', action: ' + JSON.stringify(action));
    return {
        name: changeNameReducer(state.name, action),
        greet: greetingReducer(state.greet, action)
    }
};


// To use the combineReducers() function, uncomment the code below and comment out the rootReducer above
// import { combineReducers} from 'redux'
// const rootReducer = combineReducers({
//     name: changeNameReducer,
//     greet: greetingReducer
// });

export default rootReducer;