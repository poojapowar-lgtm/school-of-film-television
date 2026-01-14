import React from "react";
import "./specialization.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const Specialization = () => {
  const specializations = [
    {
      title: "Direction and \n Screenplay Writing",
      logo: "/assets/images/icons/direction.webp",
    },
    {
      title: "Cinematography \n",
      logo: "/assets/images/icons/cinematography.webp",
    },
    {
      title: "Film Editing \n",
      logo: "/assets/images/icons/megaphone.webp",
    },
    {
      title: "Sound Recording \n & Designing",
      logo: "/assets/images/icons/film-editing.webp",
    },
    {
      title: "VFX & Motion \n Graphics",
      logo: "/assets/images/icons/VFX.webp",
    },
  ];

  return (
    <div className="specialization-section">
      <DividerWithTitle title="Specializations" />
      {/* <h3 className="innerpage-title">Specializations</h3> */}

      <div className="specialization-grid">
        {specializations.map((item, index) => (
          <div className="specialization-card" key={index}>
            <img src={item.logo} alt={item.title} />
            {item.title && (
              <h4 className="spl-subtitle">
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
  );
};

export default Specialization;
