import React from 'react';
import ReactDOM from 'react-dom';

import { title, contacts } from './data/contactdata';
import { App } from './components/app.jsx';

ReactDOM.render(
    <App title={title} contacts={contacts}/>,
    document.getElementById('root')
);
