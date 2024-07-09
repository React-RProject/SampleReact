import React,{useState,useEffect} from "react";

function StartStopTimer(){

    const[counter,setCounter]=useState(0)
    const[running,setRunning]=useState(false)

    useEffect(()=>{
        if(!running)return
        const timing= setInterval(()=>setCounter(counter=>counter+1),1000)
        console.log("setCounter")
        return ()=>clearInterval(timing)
    },[running])

    return(
        <div>
            <h1>COUNT:{counter}</h1>
            <button onClick={()=>setRunning(true)} disabled={running}>START</button>
            <button onClick={()=>setRunning(false)} disabled={!running}>STOP</button>
        </div>
    )
        
}

export default StartStopTimer;
