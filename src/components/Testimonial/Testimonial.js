import React from "react";
// import testimonials from "../../data/testimonial";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import CustomerDetails from "./CustomerDetails";
import styled from "styled-components";

const Testimonial = ({
  testimony,
  firstName,
  lastName,
  occupation,
  imageUrl,
}) => {
  return (
    <TestimonyCard>
      <p>{testimony}</p>
      <div>
        <Avatar src={imageUrl} />
        <CustomerDetails
          firstname={firstName}
          lastname={lastName}
          occupation={occupation}
        />
      </div>
    </TestimonyCard>
  );
};

export default Testimonial;

Testimonial.propTypes = {
  testimony: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const TestimonyCard = styled.div`
flex:180px;
`;