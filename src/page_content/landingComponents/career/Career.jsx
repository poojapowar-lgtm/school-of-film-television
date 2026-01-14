import React from "react";
import "./career.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const Career = () => {
  const images = [
    "/assets/images/film_posters/award-films/Siya.webp",
    "/assets/images/film_posters/award-films/Asamtol.webp",
    "/assets/images/film_posters/award-films/Divine Caponies.webp",
    "/assets/images/film_posters/award-films/Gumnaam.webp",
    "/assets/images/film_posters/award-films/Ghungath.webp",
    "/assets/images/film_posters/award-films/Pariah.webp",
    "/assets/images/film_posters/award-films/Koyta.webp",
    "/assets/images/film_posters/award-films/Sunita.webp",
    "/assets/images/film_posters/award-films/Shalechiya dwari .webp",
    "/assets/images/film_posters/award-films/Amhi doghe.webp",
  ];

  return (
 <div className="career-section">
  <DividerWithTitle title="Career Opportunities" />

  <div className="carousel-background">
    <div className="carousel-wrapper career">
      <div className="carousel-track">
        {[...images, ...images].map((img, index) => (
          <img key={index} src={img} alt={`carousel-${index}`} className="track-images"/>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default Career;
