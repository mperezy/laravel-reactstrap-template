import React, { Component } from 'react';
import { Form, FormGroup, FormText, Container, Row, Col, Button, Label, Input } from 'reactstrap';
import Nav from '../NavBar';
import axios from 'axios';

export default class Forgot extends Component{
    constructor(props){
        super(props);
        this.state =  {
            email : '',
        }
    }

    onSubmit(e){
        e.preventDefault();
        const {email} = this.state;
        axios.post('api/password/email', {
            email,
        }).then(response => {
                this.refs.email.value="";
                this.setState({err: false});
        }).catch(error => {
            this.setState({err: true});
            this.refs.email.value="";
        });
    }

    onChange(e){
        const email = e.target.value;
        this.setState({email : email});
    }

    render(){
        let error = this.state.err ;
        let msg = (!error) ? 'We have e-mailed your password reset link!' : 'User doesnt exist' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return(
            <div>
                <Nav />
                <br/>
                <Container>
                    <Row>
                        <Col xs={"3"}></Col>
                        <Col>
                            <FormGroup>
                                <h5><Label>Reset Password</Label></h5>
                            </FormGroup>
                                <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                    {error != undefined && <div className={name} role="alert">{msg}</div>}
                                </div>
                                <form className="form-horizontal" role="form" method="POST" onSubmit={this.onSubmit.bind(this)}>
                                    <FormGroup>
                                        <Label for="email">E-mail Address</Label>
                                        <Input id="email" type="email" ref= "email" placeholder={"Your e-mail here"} className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                    </FormGroup>

                                    <FormGroup className="form-group">
                                        <Button color="primary" type="submit" className="btn btn-primary">
                                            Send Password Reset Link
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