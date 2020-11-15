import React from "react";


function EmployeeTableTemplate(props) {
return (
  <div>
    
    <table>
      <tbody>
      <tr>
          <td className="text-center" scope="col">Employee</td>
          <td className="text-center" scope="col">Name</td>
          <td className="text-center" scope="col">Phone</td>
          <td className="text-center" scope="col">Email</td>
          <td className="text-center" scope="col">DOB</td>
        </tr>
        <tr>
          <td className="text-center" scope="col"><img src={props.picture}/></td>
          <td className="text-center" scope="col">{props.name}</td>
          <td className="text-center" scope="col">{props.phone}</td>
          <td className="text-center" scope="col">{props.email}</td>
          <td className="text-center" scope="col">{props.dob}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
  )
}

export default EmployeeTableTemplate;