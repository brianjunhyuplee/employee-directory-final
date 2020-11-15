import React from "react";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";
import { EmployeeProvider } from "./utils/GlobalState";
import './App.css';

function App() {
  return (
   <div className="container">
     <h1>Employee Directory</h1>
     <SearchBar />
     <EmployeeProvider>
        <EmployeeTable />
     </EmployeeProvider>
   </div>
  );
}

export default App;
