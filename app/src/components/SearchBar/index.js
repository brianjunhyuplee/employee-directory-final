import React, { useRef } from "react";
import { useEmployeeContext } from "/Users/brianlee/Desktop/employee-directory-final/app/src/utils/GlobalState.js";

function SearchBar() {
    const inputRef = useRef();
    const [_, dispatch] = useEmployeeContext();


function handleSubmit(event) {
    event.preventDefault();

    dispatch({
        type: "add",
        name: inputRef.current.value
    });
    inputRef.current.value = "";
}

return (
    <div>
        <input ref={inputRef} placeholder="Search" />
    </div>
);
}
export default SearchBar;

