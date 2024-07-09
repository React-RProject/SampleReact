import React,{useContext} from "react";

function Table(){
    
    return(
      <table>
      <thead>
        <tr>
          <th>Table Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{`Hello Table!`}</td>
        </tr>
      </tbody>
    </table>
    );
  }


  export default Table;