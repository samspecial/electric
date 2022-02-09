import React, { useEffect, useCallback, useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import styled from "styled-components";
import { Button, InputField } from "./Styles";
import { MdClose } from "react-icons/md";
import AlertContext from "../context/alert/alertContext";
import BenefitContext from "../context/benefit/benefitContext";
import Toast from "./Toast";

let BASE_URL;
process.env.NODE_ENV === "production"
  ? (BASE_URL = "")
  : (BASE_URL = process.env.REACT_APP_BASE_URL);

const Modal = ({ showModal, setShowModal }) => {
  const [benefit, setBenefit] = useState("");
  const [loading, setLoading] = useState(false);
  const benefitContext = useContext(BenefitContext);
  const { createBenefit, error } = benefitContext;
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
    if (!benefit) {
      setAlert("Opps", "Field can not be empty", "danger");
      return;
    }

    setLoading(true);
    try {
      const result = createBenefit({ name: benefit });
      setBenefit("");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setAlert("Fail", error, "danger");
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
          <FormComponent noValidate onSubmit={submitBenefit}>
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
          </FormComponent>
        </ModalWrapper>
      </animated.div>
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: 400px;
  height: 250px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, 40%);
  z-index: 10;
  border-radius: 10px;

  @media screen and (max-device-width: 480px) {
    width: 225px;
    height: 150px;
  }
`;

const FormComponent = styled.form`
  width: 100%;
  height: 100%;
  padding: 2.5rem 3rem;
  @media screen and (max-device-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
  color: #880212;
  @media screen and (max-device-width: 480px) {
    top: 5px;
    right: 5px;
    width: 14px;
    height: 14px;
  }
`;
