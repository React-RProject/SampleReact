import React, { useEffect, useState } from "react";
 function Counter1(){

    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("useeffect")
    })
    
    return(
        <div>
            <h1>Use Effect</h1>
            <div className="container">
                <h1>{count}</h1> 
                <button onClick={()=>{setCount(count+1)}}>Click here!</button>

            </div>
        </div>
    );
 }
 export default Counter1;