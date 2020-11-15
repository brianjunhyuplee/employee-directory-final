import React, { Component } from "react";
import { useEmployeeContext } from "/Users/brianlee/Desktop/employee-directory-final/app/src/utils/GlobalState.js";

function Search() {
    state = {
        employees: [{}],
        search: "",
        filteredEmployees: [{}],
        order: "asc",
        loading: true,

    }
    const inputRef = useRef();
    const [_, dispatch] = useEmployeeContext();


function handleSubmit(event) {
    event.preventDefault();

    this.setState({ search: inputRef.current.value.toLowerCase });
    let { employees } = this.state.employees;

}

return (
    <div>
        <input ref={inputRef} placeholder="Search" onChange={handleSubmit} />
    </div>
);
}
export default Search;

