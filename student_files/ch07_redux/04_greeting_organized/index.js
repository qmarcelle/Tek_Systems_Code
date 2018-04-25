import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './src/App.jsx'
import rootReducer from './src/reducers/index'

Array.prototype.rotate = function() {
    return this.slice(1, this.length).concat(this[0]);
};


const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
