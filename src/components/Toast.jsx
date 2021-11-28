import React, { useContext } from "react";
import styled, { css } from "styled-components";
import {
  FaInfoCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaCheck,
} from "react-icons/fa";
import AlertContext from "../context/alert/alertContext";

const Toast = () => {
  const alertContext = useContext(AlertContext);

  const getIcon = (type) => {
    switch (type) {
      case "INFO".toLowerCase():
        return <FaInfoCircle />;
      case "WARNING".toLowerCase():
        return <FaExclamationTriangle />;
      case "DANGER".toLowerCase():
        return <FaExclamationCircle />;
      case "SUCCESS".toLowerCase():
        return <FaCheck />;
      default:
        return;
    }
  };

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <Div type={alert.type} key={alert.id}>
        <span>{getIcon(alert.type)} </span>
        <div>
          <h4>{alert.type}</h4>
          <p>{alert.msg}</p>
        </div>
      </Div>
    ))
  );
};

export default Toast;

const Div = styled.div`
  width: 250px;
  height: 60px;
  position: fixed;
  transition: 0.3s ease;
  pointer-events: auto;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.type === "info"
      ? css`
          background: #880212;
        `
      : props.type === "warning"
      ? css`
          background: yellow;
        `
      : props.type === "danger"
      ? css`
          background: red;
        `
      : css`
          background: green;
        `};

  img {
    flex: 1;
    display: block;
  }

  div {
    flex: 6;
    margin-left: 10px;
    h4,
    p {
      color: white;
      font-size: 0.85rem;
    }
  }
`;
