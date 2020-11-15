import React, { Component } from "react";
import { useEmployeeContext } from "../EmployeeTable";
import SearchBar from "../SearchBar";

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
                 
            ))}
        </div>
    )
}

}
export default Search;

