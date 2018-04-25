import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App.jsx';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

setTimeout(()=> { ReactDOM.unmountComponentAtNode(document.getElementById('root')); }, 5000);

