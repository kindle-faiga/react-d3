import React from 'react';
import { render } from 'react-dom';
import App from './app';
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

render(<App />, document.getElementById('content'));
