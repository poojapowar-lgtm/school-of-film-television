import React from "react";
import "./learning.css";

const LearningData = [
  {
    id: 1,
    title: "Alumni's Films & Recorded Footages for Practice",
  },
  {
    id: 2,
    title: "Different genres film Library",
  },
  {
    id: 3,
    title: "Online and e-Resource",
  },
];

const Learning = () => {
  return (
    <div>
      <h2 className="innerpage-title">Learning Resorces</h2>
      <div className="learning-container">
        <div className="learning-grid ">
          {LearningData.map((learning) => (
            <div className="common-card" key={learning.id}>
              <h4 className="common-title">{learning.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;
