import React from "react";
import PropTypes from "prop-types";

const UserDetails = ({ values: { fullname, email, address, phoneNumber }, nextStep, handleChange }) => {
    const proceed = event => {
        event.preventDefault();
        nextStep();
        if (!shouldProceed())
            return

    }

    const shouldProceed = () => {
        const emailRegex = RegExp(/\S+@\S+\.\S+/);
        if (!fullname || !email || !address || !phoneNumber) return
        return fullname.length > 4 && emailRegex.test(email) && address.length > 20
    }

    return (
        <>
            <form noValidate>
                <div>
                    <label htmlFor="fullName">Fullname</label>
                    <input type="text"
                        placeholder="Please enter your fullname"
                        name="fullname"
                        id="fullName"
                        value={fullname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        placeholder="Please enter your email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text"
                        placeholder="Please enter your address"
                        name="address"
                        id="address"
                        value={address}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Fullname</label>
                    <input type="tel"
                        placeholder="Please enter your phone number"
                        name="phoneNumber"
                        id="phone"
                        value={phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" disable={!shouldProceed()} onClick={proceed}>Next</button>
            </form>
        </>
    )
}

export default UserDetails;

UserDetails.propTypes = {
    values: PropTypes.object.isRequired,
    nextStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}