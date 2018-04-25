import React from 'react';
import ReactDOM from 'react-dom';

import { title, contacts } from './contactdata'
import { App } from './components.jsx'

ReactDOM.render(
    <App title={title} name={contacts[0].name} address={contacts[0].address}/>,
    document.getElementById('root')
);
