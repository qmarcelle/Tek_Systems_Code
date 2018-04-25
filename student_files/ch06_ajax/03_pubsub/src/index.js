import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

let title = 'Pub-Sub Example';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('root')
);
