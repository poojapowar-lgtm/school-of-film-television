import React from "react";
import Divider from "../divider/Divider";
import "./divider_title.css";

const DividerWithTitle = ({ title }) => {
  return (
    <div className="divider-title-row">
      <Divider direction="left" />
      <h1 className="title"> {title}</h1>
      <Divider direction="right" />
        {/* <h1 className="title"> {title}</h1> */}
    </div>
  );
};

export default DividerWithTitle;
