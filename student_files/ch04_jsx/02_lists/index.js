import React from 'react';
import ReactDOM from 'react-dom';

import { title, contacts } from './contactdata';
import { App } from './app.jsx';

ReactDOM.render(
    <App title={title} contacts={contacts}/>,
    document.getElementById('root')
);
