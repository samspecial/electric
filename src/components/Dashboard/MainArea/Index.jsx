import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Analytics from "./Analytics";
import Sales from "./Sales";
import Users from "./Users";
import Products from "./Products";
import Transactions from "./Transactions";
import Reports from "./Reports";
import Mail from "./Mail";
import Feedback from "./Feedback";
import Message from "./Message";

const Index = (props) => {
  const { submenu } = useParams();
  const loadRoutePage = () => {
    switch (submenu) {
      case "analytics":
        return <Analytics />;
        break;
      case "sales":
        return <Sales />;
        break;
      case "users":
        return <Users />;
        break;
      case "products":
        return <Products />;
        break;
      case "transactions":
        return <Transactions />;
        break;
      case "reports":
        return <Reports />;
        break;
      case "mail":
        return <Mail />;
        break;
      case "feedback":
        return <Feedback />;
        break;
      case "message":
        return <Message />;
        break;
      case "manage":
        return <Manage />;
        break;

      default:
        return <h2>Dashboard Home</h2>;
        break;
    }
  };

  return <div>{loadRoutePage()}</div>;
};

Index.propTypes = {};

export default Index;
