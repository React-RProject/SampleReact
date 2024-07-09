import React, { useState } from 'react'
  
 function FormValidation() {
    const[formData,setFormData]=useState<any>({
      username:'',email:'',password:'',confirmpassword:''
    });
    const[error,setError]=useState<any>({});

    const handleChange=(event:any)=>{
        const{name,value}=event.target;
        setFormData({
            ...formData,[name]:value,
        });
    }
    const handleSubmit=(event:any)=>{
        event.preventDefeult();
        const newError =validateForm(formData);
        setError(newError);


        if(Object.keys(newError).length===0){
            console.log('Form submitted successsfully');
        }
        else{
            console.log('Form Submision failed')
        }
    };
    const validateForm=(data:any)=>{
        let error: any={};
        if (!data.username.trim()) {
            error.username='username is required';
        }
        if (!data.email.trim) {
            error.email='email is required';
        }
        else if(!/\S+@\S+\.\S+/.test(data.email)){
            error.email='email is invaild'
        }
        if(!data.password){
            error.password='password is required'
        }
        else if(data.password.length<8){
            error.password='password must be atleast 8character';
        }
        if (data.confirmpassword !== data.password) {
            error.confirmpassword='password is do not match'
        }
        return error;
    };
  return (
    <>
    <div>FormValidation
      <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input type="text" name='username' value={formData.username} onChange={handleChange} />
            {error.username &&<span>{error.username}</span> }
        </div>
        <div>
            <label>Email:</label>
            <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    {error.email &&<span>{error.email}</span>}
        </div>
        <div>
            <label>Password:</label>
            <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
            />
            {error.password &&<span>{error.password}</span>}
                    
        </div>
        <div>
            <label>Confirm Password:</label>
            <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            {error.confirmPassword &&<span>{error.confirmPassword}</span>}
                    
        </div>
        <button type="submit">Submit</button>
     </form>
    </div>
    </>
    
  );
}
export default FormValidation;




