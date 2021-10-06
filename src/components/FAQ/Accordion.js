import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import "../../accordion.css";

const Accordion = ({ title, children }) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };

  const titleStyle = {
    fontWeight: 700,
    fontSize: "12px",
  };

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toogleActive}>
        <p style={titleStyle}>{title}</p>
        <span className={active ? "accordion-icon rotate" : "accordion-icon"}>
          <FiChevronDown />
        </span>
      </button>

      <div ref={contentRef} className="accordion-content">
        {children}
      </div>
    </div>
  );
};

export default Accordion;
