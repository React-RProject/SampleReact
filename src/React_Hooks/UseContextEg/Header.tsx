import React,{useContext} from "react";
import { ThemeColor } from "../../App";
function Header(){
    const themeColor = useContext(ThemeColor);
    console.log("themeColor<><>",themeColor);
    

    return(
      <>
      <h1 style={{backgroundColor: themeColor}}>Header</h1>
      <h2>{`hello Header!`}</h2>
      </>
    );
  }

  export default Header;