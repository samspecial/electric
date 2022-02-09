import React, { useContext } from "react";
import styled, { css, withTheme } from "styled-components";
import {
  FaInfoCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaCheck,
} from "react-icons/fa";
import AlertContext from "../context/alert/alertContext";

const Toast = () => {
  const alertContext = useContext(AlertContext);
  const styles = { color: "white" };
  const getIcon = (type) => {
    switch (type) {
      case "INFO".toLowerCase():
        return <FaInfoCircle style={styles} />;
      case "WARNING".toLowerCase():
        return <FaExclamationTriangle style={styles} />;
      case "DANGER".toLowerCase():
        return <FaExclamationCircle style={styles} />;
      case "SUCCESS".toLowerCase():
        return <FaCheck style={styles} />;
      default:
        return;
    }
  };

  return alertContext.alerts.map((alert) => (
    <Div type={alert.type} key={alert.id}>
      <span>{getIcon(alert.type)} </span>
      <div>
        <h4>{alert.subtext}</h4>
        <p>{alert.msg}</p>
      </div>
    </Div>
  ));
};

export default Toast;

const Div = styled.div`
  width: 250px;
  min-height: 80px;
  position: fixed;
  bottom: 5%;
  z-index: 999999999;
  pointer-events: auto;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: 7.5s infinite alternate slidein;

  @keyframes slidein {
    from {
      margin-left: 100%;
    }
    80% {
      margin-left: 0%;
    }
    to {
      margin-left: 150%;
    }
  }

  ${(props) =>
    props.type === "info"
      ? css`
          background: #17a2b8;
          color: #b82c17;
        `
      : props.type === "warning"
      ? css`
          background: #f5a422;
          color: #38302d;
        `
      : props.type === "danger"
      ? css`
          background: #55040d;
          color: #a7a098;
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
      font-size: 0.85rem;
    }

    p::first-letter,
    h4::first-letter {
      text-transform: capitalize;
    }
  }
`;
