import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const Navigate = useNavigate();
  const NavigateTo = () => {
    Navigate("MyForm");
  }
  return (
    <>
    <div>Homepage</div>
    <button onClick={NavigateTo}>Naivgate</button>
    </>
  )
}

export default Homepage
