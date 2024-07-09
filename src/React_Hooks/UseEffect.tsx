import React, { useState,useEffect } from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);
    const[msg,setMsg]=useState("initial message");

    useEffect(()=>{
        console.log('component updated');
        console.log(msg);
        console.log('count is increased to',count);
    })
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Click me</button>
        <p>the count valueis:{count}</p>
        <button onClick={()=>{setMsg('msg updated')}}>update message</button>

    </div>
  )
}

export default UseEffect;