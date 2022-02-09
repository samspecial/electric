import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";

export const DataTable = ({ benefits, loading }) => {
  return (
    <>
      {benefits?.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Benefit</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {benefits?.map((benefit, index) => (
              <tr key={benefit?.id}>
                <td>{++index}</td>
                <td>{benefit?.name}</td>
                <td>
                  <FaEdit title="Edit benefit" className="app-icons" />
                </td>
                <td>
                  {" "}
                  <FaTrash
                    key={benefit?.id}
                    onClick={() => deleteBenefit(benefit?.id)}
                    title="Delete benefit"
                    className="app-icons"
                    color="red"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>
          You currently don't have any benefit. Click the + icon to add now.
        </p>
      )}
    </>
  );
};

// .container {
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// }

const Table = styled.table`
  width: 800px;
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
`;
