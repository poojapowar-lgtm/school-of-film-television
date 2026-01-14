import React from "react";
import "./mentor.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const Mentor = () => {
  const images = [
    "/assets/images/home/mentor/mentor1.webp",
    "/assets/images/home/mentor/mentor8.webp",
    "/assets/images/home/mentor/mentor7.webp",
    "/assets/images/home/mentor/mentor6.webp",
    "/assets/images/home/mentor/mentor3.webp",
    "/assets/images/home/mentor/mentor4.webp",
    "/assets/images/home/mentor/mentor2.webp",
    "/assets/images/home/mentor/mentor.webp",
  ];
  return (
    <section className="mentor-section">
      <div className="mentor-content">
        {/* LEFT SIDE */}
        <div className="mentor-left">
          {/* Title */}
          <DividerWithTitle title="Our Mentor" />

          <div className="img-wrap">
            <img src="/assets/images/home/mentor/jabbar_patel.webp" alt="Mentor" />
          </div>

          {/* Mentor Info */}
          <div className="mentor-info">
            <img
              src="/assets/images/home/award_logo.webp"
              alt="Icon"
              className="mentor-icon"
            />
            <div>
              <h3 className="mentor-name">Mr. Jabbar Patel</h3>
              <p className="mentor-message">
                “Cinema is not just about visuals, it’s about emotions,
                discipline, and honesty. Always tell stories that matter.”
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="mentor-right">
          <p className="mentor-paragraph">
            Dr. Jabbar Patel is a renowned Indian filmmaker, known for his
            socially relevant and critically acclaimed films like 'Dr. Babasaheb
            Ambedkar' and 'Mukta'. As a Dadasaheb Phalke Award winner, he has
            made significant contribution to Indian Cinema, shedding light on
            important social issues and inspiring generations of filmmaker.
          </p>

          {/* 8 Images Grid */}
          <section className="image-section">
            <div className="image-grid">
              {images.map((img, index) => (
                <img key={index} src={img} alt={`Gallery ${index + 1}`} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
