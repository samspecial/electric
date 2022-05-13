import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import {
  Button,
  CloseModalButton,
  InputField,
  ModalBackground,
  ModalComponent,
} from "../../Styles";
import BenefitContext from "../../../context/benefit/BenefitContext";
import AlertContext from "../../../context/alert/alertContext";

export const EditPopup = ({
  benefit,
  editBenefit,
  showEditBenefit,
  updateBenefit,
  message,
}) => {
  const { setAlert } = useContext(AlertContext);
  const [value, setValue] = useState(benefit);

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => setValue(event.target.value);
  const updateSubmitBenefit = (e) => {
    e.preventDefault();
    value?.trim();
    if (!value) {
      setAlert("Oops", "Benefits can not be empty", "danger");
      return;
    }

    benefit.name = value;
    setLoading(true);
    updateBenefit(benefit);
    setLoading(false);

    if (message.length > 0) {
      setAlert("Benefit", message, "success");
      showEditBenefit(!editBenefit);
    } else {
      setAlert("Error", error, "danger");
    }
  };

  return (
    <ModalBackground>
      <ModalComponent onSubmit={updateSubmitBenefit} noValidate>
        <h2>Edit benefit</h2>
        <label htmlFor="benefits">
          <InputField
            spellCheck="true"
            type="text"
            placeholder="benefits goes in here"
            name="benefits"
            id="benefits"
            value={value?.name}
            onChange={handleChange}
          />
        </label>
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => showEditBenefit(!editBenefit)}
        />
        <Button type="submit">{loading ? "Loading..." : "Update"}</Button>
      </ModalComponent>
    </ModalBackground>
  );
};

EditPopup.prototype = {
  benefit: PropTypes.object,
};
