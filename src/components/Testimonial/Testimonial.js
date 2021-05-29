import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import CustomerDetails from "./CustomerDetails";
import styled from "styled-components";
import { ClientInfo } from "../Styles";

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
      <ClientInfo>
        <Avatar src={imageUrl} />
        <CustomerDetails
          firstname={firstName}
          lastname={lastName}
          occupation={occupation}
        />
      </ClientInfo>
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
display:flex;
flex-flow:column nowrap;
padding:10px;
justify-content:space-between;
height:230px;
align-items:flex-start;
p{
  font-size:0.85rem;
}
`;