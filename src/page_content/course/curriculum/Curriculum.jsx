import React from "react";
import "./curriculum.css";

const Curriculum = ({ title, children, imageSrc }) => {
  return (
    <section >
      <div className="curriculum-content">
        {/* Left Content */}
        <div className="curriculum-left">
          {title && <h2 className="innerpage-title">{title}</h2>}
          <div className="curriculum-text">
           {children}
          </div>
        </div>

        {/* Right Image */}
        <div className="curriculum-right">
          <img src={imageSrc} alt={title || "Curriculum"} />
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
