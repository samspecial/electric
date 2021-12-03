import React, {useState} from "react";
import Login from "./Signin";


const LoginForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const submitForm = () => {
        setIsSubmitted(true);
    }
    return (
        <div>
        {!isSubmitted ? <Login submitForm={submitForm}/> : (<Dashboard/>)}
        </div>
    )
}

export default LoginForm;