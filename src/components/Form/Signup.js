import React from "react";
import useForm from "./useForm";

const Signup = () => {
    const [values, handleChange] = useForm({
        fullname: "",
        email: "",
        address: "",
        phoneNumber: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <form method="POST" action="/sign-up" noValidate onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Fullname</label>
                    <input type="text"
                        placeholder="Please enter your fullname"
                        name="fullname"
                        id="fullName"
                        value={values.fullname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        placeholder="Please enter your email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text"
                        placeholder="Please enter your address"
                        name="address"
                        id="address"
                        value={values.address}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Fullname</label>
                    <input type="tel"
                        placeholder="Please enter your phone number"
                        name="phoneNumber"
                        id="phone"
                        value={values.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </>
    )
}

export default Signup;