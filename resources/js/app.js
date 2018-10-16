/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/index.css'
import Index from './components/Index';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Forgot from './components/auth/Forgot'

if (document.getElementById('root')) {
    ReactDOM.render(
        <Router>
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/forgotpassword' component={Forgot}/>
            </Switch>
        </Router>,
        document.getElementById('root')
    );
}
