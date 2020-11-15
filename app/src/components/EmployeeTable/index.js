import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeTableTemplate from "../EmployeeTableTemplate.js"

class Search extends Component{
    state = {
        employees: [{}],
        search: "",
        filteredEmployees: [{}],
    }


handleSubmit(event) {
    event.preventDefault();

    this.setState({ search: inputRef.current.value });
    const lowerCaseEmployees = search.toLowerCase();
    let { employees } = this.state.employees;
    let filtered = employees.filter(employee => {
        if (employee.name.first.toLowerCase.includes(lowerCaseEmployees)||employee.name.last.toLowerCase().includes(lowerCaseEmployees)){
        return employee;
        }
    });
    this.setState({ filtered: filtered });
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
export default Search;

