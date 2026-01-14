import React from "react";
import "./whythis.css";

const WhyThis = ({ title, whyThisData = [] }) => {
  return (
    <div className="whythis-container">
      <h2 className="innerpage-title">{title}</h2>
  
        <div className="whythis-grid">
          {whyThisData.map((item) => (
            <div className="common-card " key={item.id}>
              <h4 className="common-title">{item.title}</h4>
              {/* {item.description && <p>{item.description}</p>} */}
            </div>
          ))}
        </div>
    </div>
  );
};

export default WhyThis;
