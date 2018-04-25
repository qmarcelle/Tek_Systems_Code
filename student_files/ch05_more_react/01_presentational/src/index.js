import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App.jsx';

let title = 'Presentational vs Container Components';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('root')
);
