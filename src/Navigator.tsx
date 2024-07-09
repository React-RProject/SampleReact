import path from 'path'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Homepage from './Components/Homepage'
// import Contact from './Components/Contact'
// import Login from './Components/Login'
import ColorEffect from './React_Hooks/EffectHook/ColorEffect'
import Counter1Effect from './React_Hooks/EffectHook/Counter1Effect'
import Counter2Effect from './React_Hooks/EffectHook/Counter2Effect'
import CounterButtonEffect from './React_Hooks/EffectHook/CounterButtonEffect'
import IncreDecreEffect from './React_Hooks/EffectHook/IncreDecreEffect'
import TimerEffect1 from './React_Hooks/EffectHook/TimerEffect1'
import Contact from './Components/Contact'
import Homepage from './Components/Homepage'
import Login from './Components/Login'
import FormValid from './Components/FormValid'

const Navigator = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element : <Homepage/>,
        }, 
        {
            path: "contact",
            element : <Contact/>,
            children:[
                {
                    path:"login",
                    element:<Login/>
                }
            ]
        }, 
        {
            path:"/coloreffect",
            element:<ColorEffect/>
        },
        {
            path:"/counter1",
            element:<Counter1Effect/>
        },
        {
            path:"/counter2",
            element:<Counter2Effect/>
        },
        {
            path:"/counterbutton",
            element:<CounterButtonEffect/>
        },
        {
            path:"/increment",
            element:<IncreDecreEffect/>
        },
        {
            path:"/timereffect",
            element:<TimerEffect1/>
        },
        {
            path:"/MyForm",
            element:<FormValid/>
        }

    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default Navigator