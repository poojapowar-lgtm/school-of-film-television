import React from "react";
import "./raj_kapoor.css"; // We'll put the CSS here
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const RajKapoor = () => {
  return (
    <>
      <div className="raj-container">
        <div className="raj-content">
          {/* Left side - images */}
          <div className="raj-images">
            <div className="image-wrapper">
              <img
                className="main-image"
                src="/assets/images/home/raj_kapoor_bungalow.webp"
                alt="Raj Kapoor"
              />
              <img
                className="inner-image"
                src="/assets/images/home/raj_kapoor.webp"
                alt="Raj Kapoor"
              />
            </div>
          </div>

          {/* Right side - paragraph */}
          <div>
            <DividerWithTitle title="A Timeless Residence of Cinematic Heritage" />

            <h4 className="subtitle">From the land of Raj Kapoor</h4>
            <div className="raj-text">
              <p>
                At the legendary Raj Kapoor Studio in Pune, where echoes of
                cinematic history reverberate, lies the heart of creativity -
                Film and Television School MIT-ADT University. Amidst the
                hallowed halls and bustling sets, aspiring filmmakers and actors
                find their calling. Here, under the guidance of industry
                stalwarts, dreams take flight. From script to screen, every step
                resonates with passion and innovation. Students immerse
                themselves in the art of storytelling, honing their craft amidst
                the backdrop of cinematic heritage. At Raj Kapoor Studio, the
                legacy of Indian cinema merges seamlessly with the vision of
                tomorrow&#39;s storytellers, beckoning aspiring artists to carve
                their own cinematic journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RajKapoor;
