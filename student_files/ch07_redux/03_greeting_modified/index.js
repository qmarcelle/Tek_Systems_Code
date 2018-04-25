import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

Array.prototype.rotate = function() {
    return this.slice(1, this.length).concat(this[0]);
};

let names = ['Elizabeth', 'Jo', 'Amy', 'Margaret', 'Carrie', 'Laurie',
             'Daisy', 'Demi', 'Marmee'];

let salutations = ['Hello', 'Welcome', 'Salutations', 'Greetings', 'Good Day',
                   'Hey', 'Yo', 'Howdy' ];


const changeNameActionCreator = ()=> {
    names = names.rotate();

    return {
        type: 'CHANGE_NAME',
        name: names[0]
    };
};

const greetingActionCreator = ()=> {
    salutations = salutations.rotate();

    return {
        type: 'CHANGE_GREETING',
        salutation: salutations[0]
    };
};


class Greeting extends React.Component {
    render() {
        const { name, greeting, handleNameClick, handleGreetClick } = this.props;
        return (
            <div>
                <span onClick={handleGreetClick}>{greeting}, </span>
                <span onClick={handleNameClick}>{name}</span>
            </div>
        )
    }
}


const changeNameReducer = (state='Click to change', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

const greetingReducer = (state='Click to change', action) => {
    switch (action.type) {
        case 'CHANGE_GREETING':
            return action.salutation;
        default:
            return state;
    }
};


const rootReducer = (state={}, action) => {
    // leave this here to view reducer state/actions in console
    console.log('Root reducer: state: ' + JSON.stringify(state) + ', action: ' + JSON.stringify(action));
    return {
        name: changeNameReducer(state.name, action),
        greet: greetingReducer(state.greet, action)
    }
};


// To use the combineReducers() function, uncomment the code below and comment out the rootReducer above
// const rootReducer = combineReducers({
//     name: changeNameReducer,
//     greet: greetingReducer
// });


const store = createStore(rootReducer);


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


const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
