import React from "react";
import { useEmployeeContext } from "./utils/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function EmployeeTable() {
    const [state, dispatch] = useEmployeeContext();

    return (
        <Container>
            <Row>
                <Col>Image</Col>
                <Col>Name</Col>
                <Col>Phone</Col>
                <Col>Email</Col>
                <Col>DOB</Col>
            </Row>
            {state.map((item, index) => (
                <Row>
                    <Col key={item.image}></Col>
                    <Col key={item.name}></Col>
                    <Col key={item.phoneNumber}></Col>
                    <Col key={item.email}></Col>
                    <Col key={item.birthday}></Col>
                </Row>
            ))}
        </Container>
    );
}

export default EmployeeTable;