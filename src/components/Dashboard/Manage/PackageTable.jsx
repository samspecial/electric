import React, { useEffect, useState, useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import PackageContext from "../../../context/package/PackageContext";
import CreditCard from "../../Form/CReditCard";
import { Table } from "../../Styles";

export const PackageTable = () => {
  const packageContext = useContext(PackageContext);
  const { packages, removePackage, fetchPackages } = packageContext;

  const [item, setItem] = useState("");
  const handleEditPopup = (benefit) => {
    setItem(benefit);
    showEditBenefit(true);
  };
  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <>
      {packages?.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Plan Name</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Description</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages?.map((p, index) => (
              <tr key={index}>
                <td>{++index}</td>
                <td>{p?.plan_name}</td>
                <td>{p?.duration}</td>
                <td>{p?.price}</td>
                <td>{p?.description}</td>
                {/* <td className="edit-icon">
                  <FaEdit
                    title="Edit benefit"
                    onClick={() => handleEditPopup(benefit)}
                    className="app-icons"
                  />
                </td> */}
                <td className="delete-icon">
                  {" "}
                  <FaTrash
                    key={p?.id}
                    onClick={() => removePackage(p?.id)}
                    title="Delete plan"
                    className="app-icons"
                    color="red"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p> No plan available for now.</p>
      )}
    </>
  );
};
