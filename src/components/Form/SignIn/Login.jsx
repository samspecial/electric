
import React, {useState} from "react";
import { Button } from "../../Styles";
import useForm  from "../useForm";
import validate  from "../validateForm";


const Login = ({submitForm}) => {
    const [values, handleChange, handleSubmit, errors] = useForm(submitForm, validate);
    return (
        <form noValidate>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email"
                    placeholder="email@example.com"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.emall && <p>{ errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Email</label>
                <input type="password"
                    placeholder="enter your secret"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                />
                 {errors.pssword && <p>{ errors.password}</p>}
            </div>
            <Button/>
            </form>
    )
}

export default Login;