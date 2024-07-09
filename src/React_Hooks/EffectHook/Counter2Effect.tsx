import React,{useEffect, useState} from "react";

function Counter2() {

    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log("inside useeffect")
    },[count2])
    return(
        <div>
            <div>
            <h1>{count1}</h1>
            <button onClick={()=>{setCount1(count1+1)}}> Count1</button>
            </div>
            <div>
            <h1>{count2}</h1>
            <button onClick={()=>{setCount2(count2+1)}}>Count2</button>
            </div>
            
        </div>
    );
    
}


export default Counter2;