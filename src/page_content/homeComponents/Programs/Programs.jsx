import React from "react";
import "./programs.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const programData = [
  {
    img: "/assets/images/home/programs1.webp",
    subtitle: "B.SC in Film Making",
    text: "Undergraduate program designed to develop skilled filmmakers and specialist technicians with a strong foundation in the art and craft of cinema.",
  },
  {
    img: "/assets/images/home/programs2.webp",
    subtitle: "M. Sc. in Film Making",
    text: "Specialization focused postgraduate program designed for graduates who wish to achieve professional mastery in a specific filmmaking discipline.",
  },
  {
    img: "/assets/images/home/programs3.webp",
    subtitle: "B.A. in Screen Acting",
    text: "Specialized undergraduate program designed exclusively for aspiring actors who wish to build professional careers performing in front of the camera.",
  },
];

const Programs = () => {
  return (
    <section className="programs-section">
      <DividerWithTitle title="Let's Right Your Script With Us"/>
      
      <div className="programs-cards">
        {programData.map((program, idx) => (
          <div className="program-card" key={idx}>
            <div className="card-image">
              <img src={program.img} alt={program.subtitle} />
              <button className="button" id="pg-btn">Read More</button>
            </div>
            <h3 className="card-subtitle">{program.subtitle}</h3>
            <p>{program.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
