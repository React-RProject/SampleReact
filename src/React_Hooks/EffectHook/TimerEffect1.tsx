import React ,{useState,useEffect} from "react";


function Timer1(){
    const[time,setTime]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{setTime((time)=>time+1)},1000);
        console.log("setTime")
    });


    return(
        <div>
            <h1>this rendered {time}</h1>
        </div>
    )
}


export default Timer1;