import React from "react";
import "./aboutCourse.css";

const AboutCourse = ({
  title,
  headerRight,
  children,
  specializationTitle,
  specializations = [],
}) => {
  return (
    <div className="courses-container">
      {/* Top Row */}
      <div className="courses-header">
        <h3 className="innerpage-title ">{title}</h3>
        <div className="courses-header-right">{headerRight}</div>
      </div>

      <div className="aboutcourses-body">{children}</div>

      {/* Specialization Section */}
      {specializations.length > 0 && (
        <div className="specialization-section">
          <h3 className="innerpage-title">{specializationTitle}</h3>

          <div className="specialization-grid">
            {specializations.map((item, index) => (
              <div className="specialization-card" key={index}>
                <img src={item.logo} alt={item.title} />
                <h5 className="icons-subtitle">{item.title}</h5>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutCourse;
