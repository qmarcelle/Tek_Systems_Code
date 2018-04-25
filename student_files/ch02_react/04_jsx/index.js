import React from 'react';
import ReactDOM from 'react-dom';

import { title } from './contactdata'
import { MainHeader } from './components.jsx'


ReactDOM.render(<MainHeader title={title} />, document.getElementById('root'));
