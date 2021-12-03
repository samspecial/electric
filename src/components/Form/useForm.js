import { useState } from "react";

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { onChange, values, setValues };
};

export default useForm;
