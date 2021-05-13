import React, { useState } from "react";
import CardDetails from "./CardDetails";
import useForm from "./useForm";
import UserDetails from "./UserDetails";
import validateInfo from "./validateForm";
import SubmitNow from "./SubmitNow"

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
    const [errors, setErrors] = useState({});

    const nextStep = () => {
        if (Object.entries(errors) === 0)
            return setStep(step + 1)
        setErrors(validateInfo(values));
        console.log(errors)
    }
    const previousStep = () => {
        setStep(step - 1);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setErrors(validateInfo(values));

    }

    switch (step) {
        case 1:
            return (<UserDetails
                values={values}
                errors={errors}
                handleChange={handleChange}
                nextStep={nextStep}
            />)
        case 2:
            return (
                <CardDetails
                    {...values}
                    errors={errors}
                    nextStep={nextStep}
                    previousStep={previousStep}
                    handleChange={handleChange}
                />
            )
        case 3:
            return (
                <>
                    <SubmitNow
                        previousStep={previousStep}
                        onClick={handleSubmit}
                    />
                </>
            )
        default:
            break;
    }
}

export default Signup;