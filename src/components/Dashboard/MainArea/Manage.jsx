import React, { useState, useRef, useEffect, useContext } from "react";
import { useSpring, animated } from "react-spring";
import Modal from "../../Modal";
import styled from "styled-components";
import NotFound from "../../pages/NotFound";

import { FaPlus } from "react-icons/fa";
import BenefitContext from "../../../context/benefit/benefitContext";

import "../../../App.css";
import Toast from "../../Toast";
import { DataTable } from "../../DataTable";
import PackageForm from "../Manage/PackageForm";
import { PackageTable } from "../Manage/PackageTable";

const Manage = () => {
  const connString = JSON.parse(localStorage.getItem("connId"));

  const [showModal, setShowModal] = useState(false);
  const benefitContext = useContext(BenefitContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [benefitPerPage, setBenefitPerPage] = useState(5);

  const { fetchBenefits, removeBenefit, benefits } = benefitContext;

  const modalRef = useRef();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    fetchBenefits();
  }, [showModal]);

  const indexOfLastBenefit = currentPage * benefitPerPage;
  const indexOfFirstBenefit = indexOfLastBenefit - benefitPerPage;
  const currentBenefits = benefits?.slice(
    indexOfFirstBenefit,
    indexOfLastBenefit
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const styles = useSpring({
    loop: { reverse: true },
    from: { scaleX: 1.2, scaleY: 1.2 },
    to: { scaleX: 1.5, scaleY: 1.5 },
    delay: 2000,
  });

  const plusIconStyle = {
    color: "green",
    padding: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f2f3",
    borderRadius: "50%",
  };
  return connString?.user.role === "admin" ? (
    <Background onClick={closeModal} ref={modalRef}>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <section>
          <FirstSection>
            <h2>Manage benefit</h2>{" "}
            <animated.div
              style={{
                ...plusIconStyle,
                ...styles,
              }}
            >
              <FaPlus
                className="app-icons"
                title="Create benefit"
                onClick={openModal}
              />
            </animated.div>
          </FirstSection>
          {benefits?.length > 0 ? (
            <DataTable
              currentBenefits={currentBenefits}
              removeBenefit={removeBenefit}
              benefitPerPage={benefitPerPage}
              totalBenefits={benefits?.length}
              paginate={paginate}
            />
          ) : (
            <p>
              You currently don't have any benefit. Click the + icon to add now.
            </p>
          )}

          <PackageForm benefits={benefits} />
          <PackageTable />
        </section>
      )}

      {showModal && <Toast />}
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

const FirstSection = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;
