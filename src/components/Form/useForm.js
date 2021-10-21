import { useState, useEffect } from "react";

const useForm = (validateInfo, initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmiting] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmiting(true);
  };

  //   useEffect(() => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
  //   }, [errors]);
  return { onChange, handleSubmit, values, errors, setErrors };
};

export default useForm;
