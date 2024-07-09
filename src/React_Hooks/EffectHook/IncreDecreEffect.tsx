import React, { useEffect, useState } from "react";


function Counting(){

    const[value,setValue]=useState(0)

    useEffect(
        ()=>{
            console.log("currentValue:",value)
        },[value]
    )
    const increment=()=>{
        setValue(prevValue=>prevValue+1)
    }
    const decrement=()=>{
        setValue(prevValue=>prevValue-1)
    }
    return(
        <>
        <div>
            <h1>count:{value}</h1>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
        </div>
        </>
    )

}


export default Counting;


