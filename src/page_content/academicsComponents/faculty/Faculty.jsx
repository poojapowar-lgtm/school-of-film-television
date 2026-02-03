import React from "react";
import "./faculty.css";

const facultyData = [
  {
    id: 1,
    name: "Prof. Manish Joshi",
    designation: "Dy. Director",
  },
  {
    id: 2,
    name: "Prof. Gyanesh Kelkar",
    designation: "Associate Professor, Sound Recording &amp; Designing.",
  },
  {
    id: 3,
    name: "Prof. Krishnendu Sarkar",
    designation: "Associate Professor, Editing.",
  },
  {
    id: 4,
    name: "Prof. Santosh Swarnakar",
    designation: "Associate Professor, Cinematography.",
  },
  ,
  {
    id: 5,
    name: "Prof. Dorothy Varma",
    designation: "Assistant Professor, Direction.",
  },
  {
    id: 6,
    name: "Prof. Amarpal Fauzdar",
    designation: "Assistant Professor, Screenplay Writing.",
  },
  {
    id: 7,
    name: "Prof. Prasad Thorat",
    designation: "Assistant Professor, VFX &amp; Motion Graphics.",
  },
  {
    id: 8,
    name: "Prof. Sajeeb Majumder",
    designation: "Asst. Prof. Art Direction & Production Design",
  },
];

const Faculty = () => {
  return (
    <div>
      <h2 className="innerpage-title">Our Faculty</h2>
      <div className="faculty-container">
        <div
          className={`faculty-grid ${
            facultyData.length % 4 !== 0 ? "center-last-row" : ""
          }`}
        >
          {facultyData.map((faculty) => (
            <div className="common-card " key={faculty.id}>
              <h5 className="common-title ">{faculty.name}</h5>
              <p>{faculty.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
