import React, { useEffect, useState } from "react";
import "./vishwaraj-studio.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const images = [
  "/assets/images/vishwaraj-studio/vishwaraj3.webp",
  "/assets/images/vishwaraj-studio/vj-std2.webp",
  "/assets/images/vishwaraj-studio/vishwaraj2.webp",
  "/assets/images/vishwaraj-studio/vj.webp",
  "/assets/images/vishwaraj-studio/vishwaraj4.webp",
];

const VishwarajStudio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % images.length);
  //   }, 3500);

  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="vishwaraj-wrapper">
      <DividerWithTitle title="Where Student Sets Become Real Stories" />
      <h3 className="subtitle">Vishwaraj Studio</h3>

      {/* Content */}
      <div className="studio-content">
        {/* left sliding images */}
        {/* <div className="studio-imgs">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="National Award"
              className={`slide ${index === activeIndex ? "active" : ""}`}
            />
          ))}
        </div> */}
        <div className="studio-imgs">
          {images.map((img, index) => {
            const isActive = index === activeIndex;
            const isPrev =
              index === (activeIndex - 1 + images.length) % images.length;

            return (
              <img
                key={index}
                src={img}
                alt="National Award"
                className={`slide ${isActive ? "active" : ""} ${
                  isPrev ? "prev" : ""
                }`}
              />
            );
          })}
        </div>

        {/* Right Content */}
        <div className="studio-text">
          <p>
            Vishwaraj Studio is a creative production house dedicated to
            storytelling through film, music, and visual arts. We mentor
            aspiring filmmakers and bring unique visions to life.
          </p>

          <button className="button" id="studio-btn">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default VishwarajStudio;
