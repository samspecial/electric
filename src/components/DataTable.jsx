import React, { useState, useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import BenefitContext from "../context/benefit/benefitContext";
import { EditPopup } from "./Dashboard/Manage/EditPopup";
import { Pagination } from "./Pagination";

export const DataTable = ({
  currentBenefits,
  removeBenefit,
  benefitPerPage,
  paginate,
}) => {
  const [editBenefit, showEditBenefit] = useState(false);

  const benefitContext = useContext(BenefitContext);
  const { benefits, updateBenefit, message, error } = benefitContext;

  const [item, setItem] = useState("");
  const handleEditPopup = (benefit) => {
    setItem(benefit);
    showEditBenefit(true);
  };
  return (
    <>
      {editBenefit === true ? (
        <EditPopup
          benefit={item}
          showEditBenefit={showEditBenefit}
          editBenefit={editBenefit}
          updateBenefit={updateBenefit}
          message={message}
          error={error}
        />
      ) : (
        <div>
          <Table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Benefit</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBenefits?.map((benefit, index) => (
                <tr key={benefit?.id}>
                  <td>{++index}</td>
                  <td>{benefit?.name}</td>
                  <td className="edit-icon">
                    <FaEdit
                      title="Edit benefit"
                      onClick={() => handleEditPopup(benefit)}
                      className="app-icons"
                    />
                  </td>
                  <td className="delete-icon">
                    {" "}
                    <FaTrash
                      key={benefit?.id}
                      onClick={() => removeBenefit(benefit?.id)}
                      title="Delete benefit"
                      className="app-icons"
                      color="red"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Pagination
            benefitPerPage={benefitPerPage}
            totalBenefits={benefits.length}
            paginate={paginate}
          />
        </div>
      )}
    </>
  );
};

const Table = styled.table`
  min-width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  th {
    text-align: left;
  }

  thead {
    th {
      background-color: #55608f;
    }
  }

  tbody {
    background-color: #55608f;
    min-height: 200px;
    tr {
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
    td {
      position: relative;
      &:hover {
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -9999px;
          bottom: -9999px;
          // background-color: rgba(255, 255, 255, 0.2);
          background-color: #55608f;
          z-index: -1;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    width: 75%;
    margin: 0 auto;
  }
`;
