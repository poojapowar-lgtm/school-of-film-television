import React from "react";
import "./divider.css";

const Divider = ({ direction = "left" }) => {
  return (
    <div className={`divider-wrapper ${direction}`}>
      <div className="divider-effect"></div>
    </div>
  );
};
export default Divider;