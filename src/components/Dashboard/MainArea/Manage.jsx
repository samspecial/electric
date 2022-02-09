import React, { useState, useRef, useEffect, useContext } from "react";
import Modal from "../../Modal";
import styled from "styled-components";
import axios from "axios";
import NotFound from "../../pages/NotFound";

import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import BenefitContext from "../../../context/benefit/benefitContext";

import "../../../App.css";
import Toast from "../../Toast";
import { DataTable } from "../../DataTable";
import { Pagination } from "../../Pagination";

const Manage = () => {
  const connString = JSON.parse(localStorage.getItem("connId"));

  const [showModal, setShowModal] = useState(false);
  const benefitContext = useContext(BenefitContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [benefitPerPage, setBenefitPerPage] = useState(5);

  const {
    fetchBenefits,
    createBenefit,
    removeBenefit,
    updateBenefit,
    loading,
    error,
    benefits,
  } = benefitContext;

  const modalRef = useRef();

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    console.log("Running useEffect to setBenefit");
    fetchBenefits();
  }, [showModal]);

  const deleteBenefit = async (id) => {
    console.log(id);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const response = await axios.delete(
        `${BASE_URL}/auth/benefit/${id}`,
        config
      );

      console.log(benefit);
    } catch (error) {
      console.log(error);
    }
  };

  const indexOfLastBenefit = currentPage * benefitPerPage;
  const indexOfFirstBenefit = indexOfLastBenefit - benefitPerPage;
  const currentBenefits = benefits?.slice(
    indexOfFirstBenefit,
    indexOfLastBenefit
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return connString?.user.role === "admin" ? (
    <Background onClick={closeModal} ref={modalRef}>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <section>
          <FirstSection>
            <h2>Manage benefit</h2>{" "}
            <FaPlus
              className="app-icons"
              title="Create benefit"
              color="green"
              onClick={openModal}
            />
          </FirstSection>
          <section>
            {/* {benefits?.map((b) => {
              return (
                <h3 key={b?.id}>
                  {b?.name}{" "}
                  <FaEdit title="Edit benefit" className="app-icons" />
                  <FaTrash
                    key={b?.id}
                    onClick={() => deleteBenefit(b?.id)}
                    title="Delete benefit"
                    className="app-icons"
                    color="red"
                  />
                </h3>
              );
            })} */}
            <DataTable benefits={currentBenefits} loading={loading} />
            <Pagination
              benefitPerPage={benefitPerPage}
              totalBenefits={benefits?.length}
              paginate={paginate}
            />
          </section>
          <section>
            <p onClick={openModal}>Add New</p>
          </section>
        </section>
      )}
      {error && <Toast />}
    </Background>
  ) : (
    <NotFound />
  );
};

export default Manage;
const Background = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 3rem 1.5rem;
  z-index: 1;
`;

const IconLink = styled.span`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;
const FirstSection = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;
