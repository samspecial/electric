import React, { useEffect, useCallback, useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { Button, CloseModalButton, InputField, ModalComponent } from "./Styles";

import AlertContext from "../context/alert/alertContext";
import BenefitContext from "../context/benefit/benefitContext";
import Toast from "./Toast";

const Modal = ({ showModal, setShowModal }) => {
  const [benefit, setBenefit] = useState("");
  const [loading, setLoading] = useState(false);
  const benefitContext = useContext(BenefitContext);
  const { createBenefit, message, error } = benefitContext;
  const { setAlert } = useContext(AlertContext);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  const handleChange = (event) => {
    setBenefit(event.target.value);
  };
  const submitBenefit = async (e) => {
    e.preventDefault();
    benefit.trim();
    if (!benefit) {
      setAlert("Opps", "Field can not be empty", "danger");
      return;
    }

    setLoading(true);

    createBenefit({ name: benefit });
    setBenefit("");
    setLoading(false);
    if (message.length > 0) {
      setShowModal((prev) => !prev);
      setAlert("Benefit created", message, "success");
    } else {
      setAlert("Error", error, "danger");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {loading && <Toast />}
      <animated.div style={animation}>
        <ModalWrapper showModal={showModal}>
          <ModalComponent noValidate onSubmit={submitBenefit}>
            <label htmlFor="benefits">
              <InputField
                spellCheck="true"
                type="text"
                placeholder="benefits goes in here"
                name="benefits"
                id="benefits"
                value={benefit}
                onChange={handleChange}
              />
            </label>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
            <Button type="submit">{loading ? "Loading..." : "Submit"}</Button>
          </ModalComponent>
        </ModalWrapper>
      </animated.div>
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: 400px;
  height: 250px;
  box-shadow: 0 5px 16px -3px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, 40%);
  z-index: 10;
  border-radius: 10px;

  @media screen and (max-device-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;
