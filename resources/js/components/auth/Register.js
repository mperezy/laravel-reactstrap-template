import React, { Component } from 'react';
import { Form, FormGroup, FormText, Container, Row, Col, Button, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import Nav from '../NavBar';
import axios from 'axios';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email : '',
            password: '',
            password_confirmation: '',
        }
    }

    onSubmit(e){
        e.preventDefault();
        const {name, email, password, password_confirmation} = this.state ;
        axios.post('api/register', {
            name,
            email,
            password,
            password_confirmation
        }).then(response => {
                this.setState({err: false});
                this.props.history.push("home") ;
        }).catch(error => {
            this.refs.name.value="";
            this.refs.password.value="";
            this.refs.email.value="";
            this.refs.confirm.value="";
            this.setState({err: true});
        });
    }

    onChange(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
    }

    render() {
        let error = this.state.err ;
        let msg = (!error) ? 'Registered Successfully' : 'Oops! , Something went wrong.' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (
            <div>
                <Nav />
                <br/>
                <Container>
                    <Row>
                        <Col xs={"3"}></Col>
                        <Col>
                            <FormGroup>
                                <h5><Label>Register</Label></h5>
                            </FormGroup>
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                {error != undefined && <div className={name} role="alert">{msg}</div>}
                            </div>
                            <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <input id="name" type="text" placeholder={"Your name here"} className="form-control" ref="name" name="name" onChange={this.onChange.bind(this)} required autofocus />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="email">E-Mail Address</Label>
                                    <input id="email" type="email" placeholder={"Your e-mail here"} className="form-control" ref="email" name="email" onChange={this.onChange.bind(this)} required />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <input id="password" type="password" placeholder={"Your e-mail password here"} className="form-control"  ref="password" name="password" onChange={this.onChange.bind(this)} required/>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="password-confirm">Confirm Password</Label>
                                    <input id="password-confirm" type="password" placeholder={"Confirm your e-mail here"} className="form-control" ref="confirm" name="password_confirmation" onChange={this.onChange.bind(this)} required/>
                                </FormGroup>

                                <FormGroup>
                                    <Button type="submit" color={"primary"}>
                                        Register
                                    </Button>
                                </FormGroup>
                            </form>
                        </Col>
                        <Col xs={"3"}></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}