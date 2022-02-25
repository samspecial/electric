import React, { useState, useContext } from "react";
import useForm from "../../Form/useForm";
import Select from "react-select";
import { Button, FormComponent, FormContainer, InputField } from "../../Styles";
import { validatePackage } from "../../Form/validateForm";
import PackageContext from "../../../context/package/PackageContext";
import "../../../App.css";

const PackageForm = ({ benefits }) => {
  const initialState = {
    planName: "",
    duration: 0,
    price: 0,
    description: "",
    benefits: [],
    calltoAction: "",
  };

  const { onChange, values, setValues } = useForm(initialState);

  const [loading, isLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [benefit, setBenefit] = useState([]);
  const packageContext = useContext(PackageContext);
  const { createPackage } = packageContext;
  const options = benefits.map((benefit) => ({
    label: benefit.name,
    value: benefit.name,
  }));

  const handleChange = (value) => {
    let result = value.map((v) => v.value);
    setBenefit(result);
  };
  const packageSubmit = (e) => {
    e.preventDefault();
    const formData = {
      planName: values.planName,
      duration: +values.duration,
      price: +values.price,
      description: values.description,
      benefits: benefit,
      calltoAction: values.calltoAction,
    };

    setErrors(validatePackage(formData));
    if (Object.keys(errors).length > 0) {
      return;
    }
    isLoading(true);

    createPackage(formData);
    // setBenefit("");
    // setLoading(false);
    // if (message.length > 0) {
    //   setShowModal((prev) => !prev);
    //   setAlert("Benefit created", message, "success");
    // } else {
    //   setAlert("Error", error, "danger");
    // }

    isLoading(false);
  };

  return (
    <FormContainer>
      <FormComponent addPlan="add" noValidate onSubmit={packageSubmit}>
        <h2>Add plan</h2>
        <label htmlFor="planName">
          <InputField
            type="text"
            placeholder="Plan name"
            name="planName"
            id="planName"
            value={values.planName}
            onChange={onChange}
          />
          {errors?.planName && (
            <small className="error-small">{errors?.planName}</small>
          )}
        </label>

        <label htmlFor="duration">
          <InputField
            type="number"
            placeholder="Duration in days"
            name="duration"
            id="duration"
            value={values.duration}
            onChange={onChange}
          />
          {errors?.duration && (
            <small className="error-small">{errors?.duration}</small>
          )}
        </label>

        <label htmlFor="price">
          <InputField
            type="number"
            placeholder="Price"
            name="price"
            id="price"
            value={values.price}
            onChange={onChange}
          />
          {errors?.price && (
            <small className="error-small">{errors?.price}</small>
          )}
        </label>

        <label htmlFor="description">
          <InputField
            type="text"
            placeholder="Description"
            name="description"
            id="description"
            value={values.description}
            onChange={onChange}
          />
          {errors?.description && (
            <small className="error-small">{errors?.description}</small>
          )}
        </label>
        <label htmlFor="benefits">
          <Select
            id="benefits"
            isMulti
            options={[...options]}
            placeholder="Choose benefit"
            onChange={handleChange}
          />
          {errors?.benefits && (
            <small className="error-small">{errors?.benefits}</small>
          )}
        </label>

        <label htmlFor="calltoaction">
          <InputField
            type="text"
            placeholder="Call to action"
            name="calltoAction"
            id="calltoaction"
            value={values.calltoAction}
            onChange={onChange}
          />
          {errors?.calltoAction && (
            <small className="error-small">{errors?.calltoAction}</small>
          )}
        </label>

        <Button accent="primary" type="submit">
          {Object.keys(errors).length !== 0
            ? "Save"
            : loading
            ? "Loading..."
            : "Save"}
        </Button>
      </FormComponent>
    </FormContainer>
  );
};

export default PackageForm;
