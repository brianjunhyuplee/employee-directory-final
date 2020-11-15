import React from "react";


function EmployeeTableTemplate(props) {
return (
  <div>
    
    <table>
      <tbody>
        <tr>
          <td className="text-center" scope="col"><img src={props.photo}/></td>
          <td className="text-center" scope="col">{props.name}</td>
          <td className="text-center" scope="col">{props.phone}</td>
          <td className="text-center" scope="col">{props.email}</td>
          <td className="text-center" scope="col">{props.dateOfBirth}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
  )
}

export default EmployeeTableTemplate;