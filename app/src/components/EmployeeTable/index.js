import React, { Component } from "react";
import EmployeeTableTemplate from "../EmployeeTableTemplate"
import Api from "../../utils/Api"
import SearchBar from "../SearchBar";

class EmployeeTable extends Component {
    state = {
        employees: [{}],
        search: "",
        filteredEmployees: [{}],
        sortBy: "asc",
        sorted: false,
    }
    //use componentDidMount to require Dom Nodes
    componentDidMount() {
        Api.returnEmployees().then(res => this.setState({ employees: res.data.results }));
    }

    handleInputChange(event) {
        event.preventDefault();
        let { search } = this.state.search;
        console.log(search);
        const lowerCaseSearch = search.toLowerCase();
        console.log(lowerCaseSearch);
        let { employees } = this.state.employees;
        console.log(employees);
        let filteredEmployees = employees.filter(employee => {
            return(
                employee.name.first.toLowerCase.includes(lowerCaseSearch)||employee.name.laste.toLowerCase.includes(lowerCaseSearch)            );
        });
        console.log(filteredEmployees);
        this.setState({ filteredEmployees: filteredEmployees });
        this.setState({ search: search });
        this.setState({ sorted: true });
    }

    returnEmployees() {
        if (this.state.sorted) {
            return (
                <div>
                    {this.state.filtered.map(employee => (
                        <EmployeeTableTemplate
                            picture={employee.picture.medium}
                            name={employee.name.first + " " + employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob.date}
                        />
                    ))}
                </div>
            );
        }
        else {
            return (
                <div>
                    {this.state.employees.map(employee => (
                        <EmployeeTableTemplate
                            picture={employee.picture.medium}
                            name={employee.name.first + " " + employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob.date}
                        />
                    ))}
                </div>
            );
        }
    }
    render() {
        return (
            <div>
                <SearchBar 
                handleInputChange = {this.handleInputChange}/>
                {this.sortBy}
            </div>
        );
    }
}
export default EmployeeTable;

