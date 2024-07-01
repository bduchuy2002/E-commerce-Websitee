import React, { useState } from "react";
import './CSS/LoginSignup.css'
const LoginSignup = () => {
    const [state, setState] = useState("login");
    return (    
        <div className="loginsignup">
            <div className="loginsignup-container">
                <hi>{state}</hi>
                   <div className="loginsignup-fields">
                    {state==="Sign Up"?<input type="text" placeholder="Your Name" /> :<></>}
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
                <p className="loginsignup-login">Create an account? <span>Click here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>

        </div>
    )
}
export default LoginSignup;