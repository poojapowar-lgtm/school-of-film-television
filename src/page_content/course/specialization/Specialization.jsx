import React from "react";
import "./specialization.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const Specialization = ({ specializationTitle }) => {
  const specializations = [
    {
      title: "Direction and \n Screenplay Writing",
      // logo: "/assets/images/icons/direction.webp",
      logo: "/assets/images/icons/new_icons/director-chair.png",
    },
    {
      title: "Sound Recording \n & Designing",
      // logo: "/assets/images/icons/film-editing.webp",
      logo: "/assets/images/icons/new_icons/microphone.png",
    },
    {
      title: "VFX & Motion \n Graphics",
      // logo: "/assets/images/icons/VFX.webp",
      logo: "/assets/images/icons/new_icons/slow-motion.png",
    },
    {
      title: "Cinematography \n",
      // logo: "/assets/images/icons/cinematography.webp",
      logo: "/assets/images/icons/new_icons/video-camera.png",
    },
    {
      title: "Film Editing \n",
      // logo: "/assets/images/icons/megaphone.webp",
      logo: "/assets/images/icons/new_icons/video-editing.png",
    },
  ];

  return (
    <div>
      {/* <DividerWithTitle title="Specializations" /> */}
      <h3 className="innerpage-title">{specializationTitle}</h3>
      <div className="specialization-section">
        <div className="specialization-grid">
          {specializations.map((item, index) => (
            <div className="specialization-card" key={index}>
              <img src={item.logo} alt={item.title} />
              {item.title && (
                <h4 className="common-title">
                  {item.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h4>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialization;
