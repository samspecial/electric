import React from "react";
import PropTypes from "prop-types";

const CustomerDetails = ({ firstname, lastname, occupation }) => {
  return (
    <>
      <p>
        {firstname} {lastname}
      </p>
      <p>{occupation}</p>
    </>
  );
};

export default CustomerDetails;

CustomerDetails.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
};
