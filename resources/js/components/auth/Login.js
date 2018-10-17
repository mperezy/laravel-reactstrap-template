import React, { Component } from 'react';
import { Form, FormGroup, FormText, Container, Row, Col, Button, Label, Input } from 'reactstrap';
import Nav from '../NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
        }
    }

    onSubmit(e){
        e.preventDefault();
        const {email , password} = this.state ;
        axios.post('api/login', {
            email,
            password
        }).then(response => {
                this.setState({err: false});
                this.props.history.push("home") ;

        }).catch(error => {
                this.refs.email.value="";
                this.refs.password.value="";
                this.setState({err: true});
        });
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {

        let error = this.state.err ;
        let msg = (!error) ? 'Login Successful' : 'Wrong Credentials' ;
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
                                <h5><Label>Login</Label></h5>
                            </FormGroup>
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                {error != undefined && <div className={name} role="alert">{msg}</div>}
                            </div>
                            <Form method={"POST"} onSubmit= {this.onSubmit}>
                                <FormGroup>
                                    <Label for="email">E-mail Address</Label>
                                    <Input id="email" type="email" ref="email" placeholder={"Your e-mail here"} className="form-control" name="email" onChange={this.onChange.bind(this)} required />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <input id="password" type="password" ref="password" placeholder={"Your e-mail password here"} className="form-control" name="password" onChange={this.onChange.bind(this)}  required />
                                </FormGroup>

                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"/>{' '} Remember Me
                                    </Label>
                                </FormGroup>

                                <br/>

                                <FormGroup>
                                    <Button type="submit" color={"primary"}>
                                        Login
                                    </Button>

                                    <li className="btn btn-link">
                                        <Link to = "forgotpassword">Forgot Your Password?</Link>
                                    </li>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col xs={"3"}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}