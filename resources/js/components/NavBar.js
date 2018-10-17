import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props);
    }

    logout(e){
        e.preventDefault();
        axios.post('api/logout').then(response => {
                this.props.history.push('/');
        }).catch(error => {
                console.log(error);
        });
    }

    handleClick(e){
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        if (this.props.link) {
            return (
                <nav className="nav navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="white-text navbar-brand" href="#" onClick={this.handleClick.bind(this)}>Basic Authentication</a>
                        </div>
                        <ul className="navbar-nav navbar-right">
                            <a className="white-text navbar-brand" href="#" onClick={this.logout.bind(this)}>{this.props.link}</a>
                        </ul>
                    </div>
                </nav>
            )
        }
        return (
            <nav className="nav navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="white-text navbar-brand" href="#" onClick ={this.handleClick.bind(this)}>Basic Authentication</a>
                    </div>
                    <ul className="navbar-nav navbar-right">
                        <li><Link className={"white-text"} to="/login">Login</Link></li>
                        <li><Link className={"white-text"} to="/register">Register</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar)