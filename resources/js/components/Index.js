import React, { Component } from 'react';
import Nav from './NavBar';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';

const Index = (props) => {
    return(
        <div>
            <Nav/>
            <br/>
            <Container>
            <Jumbotron>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple template that use <code>Laravel</code> + <code>ReactJS</code> including a simple authentication functionality.</p>
                <hr className="my-2" />
                <p>The rest of the auth functionality will be avaliable in the future.</p>
            </Jumbotron>
            </Container>
        </div>
    );
};

export default Index;