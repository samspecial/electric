import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { Button, InputField } from "../Styles";
import axios from "axios";

const Pricing = ({
  plan_name,
  description,
  price,
  plan_benefit,
  uuid,
  callToAction,
}) => {
  const navigate = useNavigate();
  let BASE_URL;
  process.env.NODE_ENV === "production"
    ? (BASE_URL = "")
    : (BASE_URL = process.env.REACT_APP_BASE_URL);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem("connId"));
    console.log(typeof userDetails);
    if (!userDetails) return navigate("/login");
    try {
      console.log(uuid);
      const res = await axios.post(
        `${BASE_URL}/auth/subscription`,
        { planId: uuid },
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <PriceCard>
      <Plan>{plan_name}</Plan>
      <p>{description}</p>
      <small>${price}</small>
      <UnorderedList>
        {plan_benefit.map((benefit, i) => {
          return (
            <li key={i}>
              <FaCheckCircle /> {benefit}
            </li>
          );
        })}
      </UnorderedList>
      <form onSubmit={handleSubmit}>
        <InputField type="hidden" value={uuid} />

        <Button accent="secondary" smallWidth="true" type="submit">
          {callToAction}
        </Button>
      </form>
    </PriceCard>
  );
};

export default Pricing;

Pricing.propTypes = {
  plan_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  plan_benefit: PropTypes.array.isRequired,
  callToAction: PropTypes.string.isRequired,
};

export const UtilityLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
  padding: 0.85rem 2.5rem;
  border-radius: 8px;
  color: #000000;
  font-size: 0.85rem;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
  margin: 0 auto;
  margin-top: 2rem;
  display: block;

  &:link {
    color: black;
  }

  &:clicked {
    color: #880212;
  }

  &:hover {
    color: white;
    background: transparent;
    outline: 1px solid white;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const PriceCard = styled.div`
  height: fit-content;
  padding: 3.5rem 0.7rem;
  background: transparent;
  border-radius: 8px;
  text-align: center;
  transition: all cubic-bezier(1, 0.28, 0, 1.15) 0.75s;
  margin: 0 0.5rem 1rem 0.5rem;
  flex: 1;

  &:hover {
    background: #fd364e;
    background: #e5021e;
    color: white;
    ${UtilityLink} {
      color: white;
    }
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25), 0px 4px 8px rgba(0, 0, 0, 0.2),
      0px 4px 8px rgba(0, 0, 0, 0.18), 0px 4px 8px rgba(0, 0, 0, 0.25),
      0px 4px 8px rgba(0, 0, 0, 0.25);
  }

  p {
    font-size: 0.85rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 0.85rem;
    text-align: center;
    width: 250px;
    margin: 0 auto;
  }

  small {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 6rem 0;
  }
`;

const Plan = styled.h4`
  font-weight: 800;
  font-size: 1.5rem;
  text-transform: capitalize;
  margin-bottom: 1.3rem;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  text-transform: capitalize;

  li {
    line-height: 1.8;
    font-size: 0.8rem;
  }
`;
