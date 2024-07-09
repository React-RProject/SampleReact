import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function UseRefomponent() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    
    previousInputValue.current = inputValue;
    console.log("previousInputValue<><><>", previousInputValue);

  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

export default UseRefomponent;
/*
Start typing in the input field and you will
see the current- and previous value.
*/
