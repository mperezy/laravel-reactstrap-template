import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Nav from '../NavBar';

export default class Home extends Component {
    render() {
        return (
            <div className="root">
                <Nav link={"Logout"}/>
                <br/>
                <Container>
                    <h1>Hey, You're looged in!</h1>
                </Container>
            </div>
        )
    }
}