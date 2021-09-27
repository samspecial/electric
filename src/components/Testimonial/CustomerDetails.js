import React from "react";
import PropTypes from "prop-types";

const CustomerDetails = ({ firstname, lastname, occupation }) => {
  return (
    <div>
      <p>
        {firstname} {lastname}
      </p>
      <p>{occupation}</p>
    </div>
  );
};

export default CustomerDetails;

CustomerDetails.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
};
