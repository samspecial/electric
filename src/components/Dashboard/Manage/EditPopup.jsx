import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import {
  Button,
  CloseModalButton,
  ModalBackground,
  InputField,
  ModalComponent,
} from "../../Styles";
import BenefitContext from "../../../context/benefit/BenefitContext";

export const EditPopup = ({ benefit, editBenefit, showEditBenefit }) => {
  const benefitContext = useContext(BenefitContext);
  //   const { loading } = benefitConext;
  const [value, setValue] = useState(benefit?.name);

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => setValue(event.target.value);
  return (
    <ModalBackground>
      <ModalComponent noValidate>
        <h2>Edit benefit</h2>
        <label htmlFor="benefits">
          <InputField
            spellCheck="true"
            type="text"
            placeholder="benefits goes in here"
            name="benefits"
            id="benefits"
            value={value}
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
