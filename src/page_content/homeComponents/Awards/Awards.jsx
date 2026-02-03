import React from "react";
import "./awards.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const Awards = () => {
  const awardsData = [
    {
      film: "Aamhi Doghe",
      award: "Nagpur Film Festival Music & Original Score",
      student: "Anuj Joshia",
    },
    {
      film: "Siya",
      award: "Kalakari Film Festival of India Certificate of Appreciation",
      student: "Director & VFX-Hetansa Rajkotia",
    },
    {
      film: "Gumnam",
      award: "Kalakari Film Festival of India 1st Gujrati Short Film",
      student: "Director - Arpit Modh",
    },
    {
      film: "Indhanam",
      award: "Global Independent Film Festival of India Best Cinematography",
      student: "DOP - Aman Mathur",
    },
    {
      film: "Indhanam",
      award: "Global Independent Film Festival of India Best Cinematography",
      student: "DOP - Aman Mathur",
    },
    {
      film: "Siya",
      award: "Kalakari Film Festival of India Certificate of Appreciation",
      student: "Director & VFX-Hetansa Rajkotia",
    },
    {
      film: "Gumnam",
      award: "Kalakari Film Festival of India 1st Gujrati Short Film",
      student: "Director - Arpit Modh",
    },
    {
      film: "Indhanam",
      award: "Global Independent Film Festival of India Best Cinematography",
      student: "DOP - Aman Mathur",
    },
    {
      film: "Indhanam",
      award: "Global Independent Film Festival of India Best Cinematography",
      student: "DOP - Aman Mathur",
    },
  ];

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
    <div className="awards-section">
      <DividerWithTitle title="Award-Winning Stories by Our Students" />

      {/* First Row (5 cards) */}
      <div className="awards-row five">
        {awardsData.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="award-card"
            style={{ backgroundImage: "url(/assets/images/home/awards_card.webp)" }}
          >
            <div className="award-content">
              <p className="film-name">{item.film}</p>
              <p className="award-name">{item.award}</p>
              <p className="student-name">{item.student}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row (4 cards) */}
      <div className="awards-row four">
        {awardsData.slice(4, 7).map((item, index) => (
          <div
            key={index}
            className="award-card"
            style={{ backgroundImage: "url(/assets/images/home/awards_card.webp)" }}
          >
            <div className="award-content">
              <p className="film-name">{item.film}</p>
              <p className="award-name">{item.award}</p>
              <p className="student-name">{item.student}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="button" id="award-btn">View All Awards</button>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {/* Duplicate array for seamless loop */}
          {[...images, ...images].map((img, index) => (
            <img key={index} src={img} alt={`carousel-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
