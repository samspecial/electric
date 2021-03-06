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
import Manage from "./Manage";
import Ticket from "./Ticket";
import Home from "./Home";

const Index = () => {
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
      case "tickets":
        return <Ticket />;
        break;

      default:
        return <Home />;
        break;
    }
  };

  return <>{loadRoutePage()}</>;
};

Index.propTypes = {};

export default Index;
