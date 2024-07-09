import React, { useState } from 'react'

const LoginForm = () => {
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[contact,setContact]=useState('')
    const[password,setPassword]=useState('')

  return (
    <>
    <div>LoginForm</div>
    <form>
        <input type="text"  placeholder='Enter your Name' onChange={(event)=>setName(event.target.value)}/>
        <input type="number" placeholder='Enter your Age'  onChange={(event)=>setAge(event.target.value)}/>
        <input type="number" placeholder='Enter your Contact' onChange={(event)=>setContact(event.target.value)} />
        <input type="text" placeholder='Enter your pasword' onChange={(event)=>setPassword(event.target.value)}/>
    </form>
    </>
    
  )
}

export default LoginForm