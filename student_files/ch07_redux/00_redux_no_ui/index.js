import { createStore } from 'redux';

const action = { type: 'INCREMENT'};

const reducer = (state={count: 0}, action) => {
    return {
        count: state.count + 1
    };
};

const store = createStore(reducer);

console.log(store.getState());
store.dispatch(action);
console.log(store.getState());