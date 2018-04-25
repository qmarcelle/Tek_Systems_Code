import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app.jsx';

let title = 'Movie Search: Avengers';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('root')
);
