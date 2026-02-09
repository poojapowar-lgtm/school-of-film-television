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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="vishwaraj-wrapper">
      <DividerWithTitle title="Where Student Sets Become Real Stories" />
      <h3 className="subtitle">Vishwaraj Studio</h3>
      <section >
        {/* Content */}
        <div className="studio-content">
          {/* left sliding images */}

          {/* <div className="studio-imgs">
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
        </div> */}

          {/* Right Content */}

          <div className="studio-section">
            <div >
              <p className="studio-text">
                One of Pune's Largest Professional Shooting Studios - A fully
                air-conditioned shooting floor enables large scale set
                construction, controlled lighting, and immersive production
                training.
                      The campus houses state of the art production and post
                production facilities, including high end digital cameras,
                professional editing suites, and one of the largest air
                conditioned shooting floors in Pune (110 x 90 x 80 sq. ft.),
                providing students with immersive, hands on experience using
                industry-grade equipment.
              </p>
      
            </div>

            <button className="button" id="studio-btn">
           More Facilites
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VishwarajStudio;
