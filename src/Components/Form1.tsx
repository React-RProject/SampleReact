import React, { useState } from 'react'

// function Form1() {
//     const[inputvalue,setInputvalue]=useState('username')
    
//     const handleChange=(event:any)=>{
//         setInputvalue(event.target.value);
        
//     };
//   return (
//     <>
//     <form>
//         <label>
//             InputValue:
//             <input type='text' value={inputvalue} name='username' onChange={handleChange}></input>
//         </label>
//         <p>InputValue:{inputvalue}</p>
//     </form>
//     </>
//   )
// }

// export default Form1;


// function DropDown() {
//     const[dropdown,setDropdown]=useState('option1')

//     const handleChange=(event:any)=>{
//         setDropdown(event.target.value)
//     }
//   return (
//     <>
//     <form>
//         <label>
//             Select an option
//             <select value={dropdown} onChange={handleChange}>
//                <option value="option1">Option1</option> 
//                <option value="option2">Option2</option>
//                <option value="option3">option3</option>
//             </select>
//         </label>
//     </form>
//     </>
//   )
// }

// export default DropDown;



// function FormValidation() {
//     const[inputvalue,setInputvalue]=useState(' ')
//     const[inputerror,setInputError]=useState('null')

//     const handleEvent=(event:any)=>{
//         setInputvalue(event.target.value)
//     }
//   return (
//     <>
//     <form>
//         <label>
//             Name:
//             <input type="text" value={inputvalue} onChange={handleEvent} />
//         </label>
//         {inputerror && <div style={{color:}}></div>}
//     </form>
//     </>
//   )
// }

// export default FormValidation;