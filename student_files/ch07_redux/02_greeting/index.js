import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

Array.prototype.rotate = function() {
    return this.slice(1, this.length).concat(this[0]);
};

let names = ['Elizabeth', 'Jo', 'Amy', 'Margaret', 'Carrie', 'Laurie',
             'Daisy', 'Demi', 'Marmee'];


const changeNameActionCreator = ()=> {
    names = names.rotate();

    return {
        type: 'CHANGE_NAME',
        name: names[0]
    };
};


class Greeting extends React.Component {
    render() {
        const { name, handleClick } = this.props;
        return (
            <div>
                <span>Hello, </span><span onClick={handleClick}>{name}</span>
            </div>
        )
    }
}


const changeNameReducer = (state={name:'Click to change'}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { name: action.name };
        default:
            return state;
    }
};


const store = createStore(changeNameReducer);


const mapStateToProps = (state) => {           // map redux state to component props
    return {
        name: state.name
    }
};


const mapDispatchToProps = (dispatch) => {     // map redux actions to component props
    return {
        handleClick: () => dispatch(changeNameActionCreator())
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
