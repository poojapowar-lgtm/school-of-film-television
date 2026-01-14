import React, { useEffect, useState } from "react";
import "./national_awards.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";
import { CgPlayButton } from "react-icons/cg";

const images = [
  "/assets/images/home/national_award.webp",
  "/assets/images/home/national_award(1).webp",
];

const NationalAwards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="national-awards">
      <DividerWithTitle title="National Awards" />

      <div className="awards-card gradient-border">
        <div className="awards-content">
          {/* Left list */}
          <div className="awards-left">
            <ul className="awards-list">
              <li>Film: Pariah (Marathi and Hindi)</li>
              <li>Section: Non-Feature Film</li>
              <li>
                Awars Winner: Producer (MIT School Of Film & Television, Pune)
              </li>
              <li>Awards: Best Debut Non-Feature Film Of Director</li>
            </ul>
            <button className="watch-button">
              Watch Movie Now
              <CgPlayButton  className="icon" />
            </button>
          </div>

          {/* Right sliding images */}
          <div className="image-slider">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="National Award"
                className={`slide ${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalAwards;
