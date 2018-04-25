import { createStore } from 'redux';

const action = {type: 'INCREMENT'};

const reducer = (state ={count: 0}, action) => {
    return {
        count: state.count + 1
    };
};

const store = createStore(reducer);
//-----------------------------
// For illustration, we show that Redux and React are separate frameworks.  Here
// we have it running without any React at all.
document.querySelector('#root button').addEventListener('click', evt => {
        store.dispatch(action);
        document.getElementById('results').innerHTML = store.getState().count;
    }, false);
