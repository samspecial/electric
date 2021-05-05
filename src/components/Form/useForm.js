import { useState } from "react";

const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);
    // const [errors, setError] = useState({});

    return [values, event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }]
}

export default useForm;