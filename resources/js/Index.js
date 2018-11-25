import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

if(document.getElementById('root')) {
    ReactDOM.render(<Home/>, document.getElementById('root'));
}