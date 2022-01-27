import React, { useState, useRef } from "react";
import Modal from "../../Modal";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Manage = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <Background onClick={closeModal} ref={modalRef}>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <>
          <h2>Manage</h2>
          <p onClick={openModal}>Add New</p>
        </>
      )}
    </Background>
  );
};

export default Manage;
const Background = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
