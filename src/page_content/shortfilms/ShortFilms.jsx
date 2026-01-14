import React, { useState } from "react";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import "./shortfilms.css";

const ShortFilm = () => {
  const [category, setCategory] = useState("Documentary");
  const [year, setYear] = useState("2023-24");

  const bgImage = "/assets/images/inner-banner/short-films-bnr.JPG";
  const title = "Award-Winning Stories";
  const subtitle = "Start Your Journey With Us";

  const imagesOne = [
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

  const imagesTwo = [
    "/assets/images/film_posters/Akhri Panna.webp",
    "/assets/images/film_posters/Alu ka Chalu.webp",
    "/assets/images/film_posters/Bahoorupi.webp",
    "/assets/images/film_posters/Borderline.webp",
    "/assets/images/film_posters/Cake.webp",
    "/assets/images/film_posters/Chakravuh.webp",
    "/assets/images/film_posters/Chitti mitti.webp",
    "/assets/images/film_posters/Cow.webp",
    "/assets/images/film_posters/Daayra.webp",
    "/assets/images/film_posters/Dont Cry.webp",
    "/assets/images/film_posters/Dvija.webp",
    "/assets/images/film_posters/Ears Truly.webp",
    "/assets/images/film_posters/Farigh.webp",
    "/assets/images/film_posters/Fool.webp",
    "/assets/images/film_posters/Happy Couple.webp",
    "/assets/images/film_posters/hauaa.webp",
    "/assets/images/film_posters/indhanam.webp",
    "/assets/images/film_posters/Intagible.webp",
    "/assets/images/film_posters/Lighter.webp",
    "/assets/images/film_posters/Minky.webp",
  ];
  return (
    <>
      <InnerBanner bgImage={bgImage} title={title} subtitle={subtitle} />
      <div className="shortfilm-wrapper">
        {/* Section 1 */}
        <section className="shortfilm-section">
          <div className="section-header">
            <h2 className="innerpage-title ">Award Winning Short Films</h2>

            <div className="filters">
              <select
                className="awards-button"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Documentary</option>
                <option>Fiction</option>
                <option>Animation</option>
              </select>

              <select
                className="awards-button"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option>2023-24</option>
                <option>2022-23</option>
                <option>2021-22</option>
              </select>
            </div>
          </div>

          <div className="cards-grid">
            {imagesOne.map((img, index) => (
              <div key={index} className="film-card">
                <img src={img} alt={`film-${index}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section className="shortfilm-section">
          <div className="section-header">
            <h2 className="innerpage-title "> Award Winning Short Films</h2>

            <div className="filters">
              <select
                className="awards-button"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Documentary</option>
                <option>Fiction</option>
              </select>

              <select
                className="awards-button"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option>2023-24</option>
                <option>2022-23</option>
              </select>
            </div>
          </div>

          <div className="cards-grid">
            {imagesTwo.map((img, index) => (
              <div key={index} className="film-card">
                <img src={img} alt={`film-${index}`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ShortFilm;
