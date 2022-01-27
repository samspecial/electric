import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { Button, InputField } from "./Styles";

const Modal = ({ showModal, setShowModal }) => {
  const [benefit, setBenefit] = useState("");
  const [loading, setLoading] = useState(false);

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
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  const submitBenefit = async (e) => {
    e.preventDefault();
    if (!benefit) return;
    alert(`This is going well ${benefit}`);
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      <animated.div style={animation}>
        <ModalWrapper showModal={showModal}>
          <FormComponent noValidate onSubmit={submitBenefit}>
            <label htmlFor="benefits">
              <InputField
                spellCheck="true"
                // className={errors.benefit ? "error-input" : ""}
                type="text"
                placeholder="benefits goes in here"
                name="benefits"
                id="benefits"
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
              />
              {/* {errors.benefit && <p>{errors.benefit}</p>} */}
            </label>

            <Button type="submit">{!loading ? "Loading..." : "Login"}</Button>
          </FormComponent>
          {/* <CloseModalButton
                  aria-label="Close modal"
                  onClick={() => setShowModal((prev) => !prev)}
                /> */}
        </ModalWrapper>
      </animated.div>
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: 250px;
  height: 200px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  //   position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const FormComponent = styled.form`
  width: 100%;
  height: 100%;
`;
const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;
