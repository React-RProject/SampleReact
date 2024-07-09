import React ,{useState}from 'react'

const UseState = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
        <button onClick={()=>setCount(count+1)}> CLICK ME</button>
        <p>Current Value:{count}</p>

    </div>
  )
}

export default UseState;