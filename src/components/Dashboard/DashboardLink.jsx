import React from "react";
import PropTypes from "prop-types";

import ListItem from "./ListItem";

const DashboardLink = ({ dashboard }) => {
  return (
    <ul>
      {dashboard.map((link) => (
        <ListItem
          key={link.id}
          {...link}
          icon={
            <link.icon
              title={link.label}
              size="13"
              style={{ marginRight: "8px" }}
            />
          }
        />
      ))}
    </ul>
  );
};

export default DashboardLink;
