import React,{useState,useEffect} from "react";

function ColorEffectComp(){

    const[color,setColor]=useState<any>('green')
    useEffect(()=>{
        const prevsColor:any='red'
        console.log("current color:",color);},[color])
    
    const colorButton=()=>{
        (setColor('red'))
    }
    return(
        <div>
            <h1 style={{color:color}}>Helloooo World{color}</h1>
            <button onClick={colorButton}> change color</button>
        </div>
    )
}


export default ColorEffectComp;