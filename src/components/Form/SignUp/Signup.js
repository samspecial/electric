import React, { useState } from "react";
import SubmitNow from "../SignUp/SubmitNow";
import CardDetails from "../SignUp/CardDetails";
import UserDetails from "../SignUp/UserDetails";
import useForm from "../useForm";
import { validateInfo } from "../validateForm";
// import { Formik, Form, Field } from "formik";

// const Signup = () => {
//     return (
//         <div>
//             <Formik initialVlues={{
//                 fullname: "",
//                 email: "",
//                 address: "",
//                 phoneNumber: "",
//                 cardname: "",
//                 cardDigit: "",
//                 expiryDate: "",
//                 cvv: ""
//             }} onSubmit={() => { }}>
//                 <Form autoComplete="off">
//                     <div>
//                     <Field name="fullname" type="text" label="Fullname" />
//                     <Field name="fullname" type="email" label="Fullname" />
//                     <Field name="fullname" type="text" label="Fullname" />
//                         <Field name="fullname" label="Fullname" />
//                     </div>
//                     <div>
//                     <Field name="fullname" label="Fullname" />
//                     <Field name="fullname" label="Fullname" />
//                     <Field name="fullname" label="Fullname" />
//                         <Field name="fullname" label="Fullname" />
//                     </div>
//                 </Form>
//             </Formik>
//         </div>
//     )
// }

const Signup = () => {
    const intialValues = {
        fullname: "",
        email: "",
        address: "",
        phoneNumber: "",
        cardname: "",
        cardDigit: "",
        expiryDate: "",
        cvv: ""
    };
    const [values, handleChange] = useForm(intialValues)

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