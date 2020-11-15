import React, { Component } from "react";
import EmployeeTableTemplate from "../EmployeeTableTemplate"
import Api from "../../utils/Api"

class EmployeeTable extends Component{
    state = {
        employees: [{}],
        search: "",
        filteredEmployees: [{}],
        
    }
//use componentDidMount to require Dom Nodes
componentDidMount() {
    Api.returnEmployees().then(res => this.setState({ employees: res.data.results}));
}

handleSubmit(event) {
    event.preventDefault();

    let { search } = this.state.search;
    const lowerCaseSearch = search.toLowerCase();
    let { employees } = this.state.employees;
    let filteredEmployees = employees.filter(employee => {
        if (employee.name.first.toLowerCase.includes(lowerCaseSearch)||employee.name.last.toLowerCase().includes(lowerCaseSearch)){
        return employee;
        }
    });
    this.setState({ filteredEmployees: filteredEmployees });
    this.setState({ search : search});
}

returnEmployees() {
    return(
        <div>
            {this.state.filtered.map(employee => (
                 <EmployeeTableTemplate
                    picture = {employee.picture.medium}
                    name = {employee.name.first+ " " + employee.name.last}
                    phone = {employee.phone}
                    email = {employee.email}
                    dob = {employee.dob.date}
                />
            ))}
        </div>
    )
}

}
export default EmployeeTable;

