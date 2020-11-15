import React from "react";
import { useEmployeeContext } from "../../utils/GlobalState";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap/';

function EmployeeTable() {
    const [state, dispatch] = useEmployeeContext();

    return (
        <div class = "container">
            <div class = "row">
                <div class = "col">Image</div>
                <div class = "col">Name</div>
                <div class = "col">Phone</div>
                <div class = "col">Email</div>
                <div class = "col">DOB</div>
            </div>
            {state.map((item, index) => (
                <div class = "row">
                    <div class = "col" key={item.image}></div>
                    <div class = "col" key={item.name}></div>
                    <div class = "col" key={item.phoneNumber}></div>
                    <div class = "col" key={item.email}></div>
                    <div class = "col" key={item.birthday}></div>
                </div>
            ))}
        </div>
    );
}

export default EmployeeTable;