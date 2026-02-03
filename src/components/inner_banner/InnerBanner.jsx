import React from "react";
import "./inner_banner.css";

const InnerBanner = ({ bgImage, title, subtitle }) => {
  return (
    <div className="inner-bnr" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="inner-bnr-overlay">
        {/* <h2 className="inner-bnr-title">{title}</h2>
        {subtitle && <h3 className="inner-bnr-subtitle">{subtitle}</h3>} */}
      </div>
    </div>
  );
};

export default InnerBanner;
