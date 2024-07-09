import React, { createContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import UseRefomponent from './React_Hooks/UseRefomponent';
import UseMemoComponent from './React_Hooks/UseMemoComponent';
import UseState from './React_Hooks/UseState';
import UseEffect from './React_Hooks/UseEffect';
import TextComponent from './SampleScreen/TextComponent';
import ColorEffectComp from './React_Hooks/EffectHook/ColorEffect'
import Counting from './React_Hooks/EffectHook/IncreDecreEffect'
import Counter1 from './React_Hooks/EffectHook/Counter1Effect'
import Counter2 from './React_Hooks/EffectHook/Counter2Effect';
import TimerEffect1 from './React_Hooks/EffectHook/TimerEffect1';
import StartStopTimer from './React_Hooks/EffectHook/CounterButtonEffect';
import Navigator from './Navigator';
import MyForm from './Components/FormValid';
import LoginForm from './Components/LoginForm';
import FormValidation from './Components/FormValidation';
// import FormValidation from './Components/Form1';
// import Form1 from './Components/Form1';
// import DropDown from './Components/Form1';
// import Header from './React_Hooks/UseContextEg/Header';
export const ThemeColor = createContext('red');
function App() {
  const [color, setcolor]=useState("red");
  const [val, setVal] = useState(1);
  const [headerVisible, setHeaderVisible] =useState<boolean>();

  useEffect(() => {
    debugger
    console.log(val * 2);
    
  }, [val])
  // let val = 1;
  const changeColor = () => {
    setcolor("blue");
    setHeaderVisible(!headerVisible)
    setVal(val+1);
    console.log("count", val);
    debugger
  }
  return (
    <ThemeColor.Provider value={color}>
      {/* {headerVisible && <Header/>} */}
      <div className="App">
        {/* <button style={{backgroundColor:color}} onClick={changeColor}>{color}</button>
        <div className='main-di'>{"values"}</div> */}
        {/* <UseRefomponent/>
        <UseMemoComponent/>
        <UseState/>
        <UseEffect/> */}
        {/* <TextComponent/> */}
        {/* <ColorEffectComp/>
        <Counter2/>
        <Counter1/>
        <TimerEffect1/>
        <Counting/>
        <StartStopTimer/> */}
        <MyForm/>
        {/* <Navigator/> */}
        {/* <Form1/> */}
        {/* <DropDown/> */}
        <FormValidation/>
        {/* <LoginForm/> */}
    </div> 
    </ThemeColor.Provider>
     
  );
}

export default App;
