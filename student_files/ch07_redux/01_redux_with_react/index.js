import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'


const action = { type: 'INCREMENT' };

const reducer = (state = { count: 0 }, action) => {
    return {
        count: state.count + 1
    }
};

const store = createStore(reducer);

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(action)
    };
};

class Increment extends React.Component {
    render() {
        const { count, onIncrement } = this.props;
        return (
            <div>
                <button onClick={onIncrement}>Increment</button>
                <div>{ count }</div>
            </div>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Increment);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);