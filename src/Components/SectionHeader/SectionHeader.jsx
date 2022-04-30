import React from "react";
import "./SectionHeader.css";

const SectionHeader = function (props) {
  return (
    <div
      className="headingContainer"
      style={{
        margin: props.margin,
      }}
    >
      <h1 className="headingTitle">{props.title}</h1>
      <div
        className="headingContent"
        style={{
          padding: props.padding ? props.padding : "1.5rem 2rem",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default SectionHeader;
