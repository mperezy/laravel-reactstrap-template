import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button, Card, CardHeader, CardBody } from 'reactstrap';

const Home = (props) => {
    return(
        <div>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col md={"8"}>
                        <Card>
                            <CardHeader>
                                React Component
                            </CardHeader>
                            <CardBody>
                                I'm a React Component
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;