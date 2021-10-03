import React from "react";
import "./Heading.css";

const Heading = function (props) {
  return (
    <div
      className="headingContainer"
      style={{
        margin: props.margin ? props.margin : "0",
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

export default Heading;
