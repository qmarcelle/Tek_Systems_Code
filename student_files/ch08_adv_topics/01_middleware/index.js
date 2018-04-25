import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './src/App.jsx'
import rootReducer from './src/reducers'
import {logTool} from './src/middleware/logMiddleware'

const store = createStore(
    rootReducer,
    {count: 0, selectedRadio: '1'},
    applyMiddleware(logTool)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);