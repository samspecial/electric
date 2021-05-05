import React, { useState } from "react";
import CardDetails from "./CardDetails";
import useForm from "./useForm";
import UserDetails from "./UserDetails";

const Signup = () => {
    const [values, handleChange] = useForm({
        fullname: "",
        email: "",
        address: "",
        phoneNumber: "",
        cardname: "",
        cardDigit: "",
        expiryDate: "",
        cvv: ""
    })

    // Form stages
    const [step, setStep] = useState(1);


    const nextStep = () => {
        setStep(step + 1)
    }
    const previousStep = () => {
        setStep(step - 1)
    }

    switch (step) {
        case 1:
            return (<UserDetails
                values={values}
                handleChange={handleChange}
                nextStep={nextStep}
            />)
        case 2:
            return (
                <CardDetails
                    {...values}
                    nextStep={nextStep}
                    previousStep={previousStep}
                    handleChange={handleChange}
                />
            )
    }
}

export default Signup;