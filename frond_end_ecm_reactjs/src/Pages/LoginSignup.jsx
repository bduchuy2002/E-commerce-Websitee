import React, { useState } from "react";
import './CSS/LoginSignup.css'
const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email:""
    })
    const changeHander = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const login = async () => {
        console.log("login", formData);
        let responseData;
        await fetch('http://localhost:4000/v1/user/login', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((res) => res.json()).then((data) => responseData = data)
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        } else {
            alert(responseData.errors);
        }
    }
    const signup = async () => {
        console.log("signup", formData);
        let responseData;
        await fetch('http://localhost:4000/v1/user/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((res) => res.json()).then((data) => responseData = data)
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        } else {
            alert(responseData.errors);
        }
    }
    return (    
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {console.log(state)}
                    {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHander} type="text" placeholder="Your Name" /> :<></>}
                    <input name="email" value={formData.email} onChange={changeHander} type="email" placeholder="Email Address" />
                    <input name="password" value={formData.password} onChange={changeHander} type="password" placeholder="Password" />
                </div>
                <button onClick={()=>{state==="Login" ?login():signup()}}>Continue</button>

                {state === "Sign Up" ? (<p className="loginsignup-login">Already have an account? <span style={{cursor:"pointer"}} onClick={()=>setState("Login")}>Login here</span></p> ):
                (<p className="loginsignup-login">Create an account? <span style={{cursor:"pointer"}}  onClick={()=>{setState('Sign Up')}}>Click here</span></p>)}
               
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>

        </div>
    )
}
export default LoginSignup;