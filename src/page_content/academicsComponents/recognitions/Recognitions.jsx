import React from "react";
import "./recognitions.css";

// Sample data array
const recognitionsData = [
  {
    id: 1,
    name: "Best Film School Award",
    image: "/assets/images/national_award.JPG",
    points: [
      "Awarded by International Film Council",
      "Recognized for curriculum excellence",
      "Outstanding student achievements",
    ],
  },
  {
    id: 2,
    name: "Top Creative Institute",
    image: "/assets/images/recognitions/rec2.jpg",
    points: [
      "National level recognition",
      "Creative pedagogy implemented",
      "Strong industry collaborations",
    ],
  },
  {
    id: 3,
    name: "Innovation in Education",
    image: "/assets/images/recognitions/rec3.jpg",
    points: [
      "New-age filmmaking courses",
      "Integration of technology in teaching",
      "Awarded by Education Ministry",
    ],
  },
];

const Recognitions = () => {
  return (
    <div>
      <h2 className="innerpage-title"> Awards & Recognitions</h2>
      <div className="recognitions-container">
        <div className="recognitions-grid">
          {recognitionsData.map((rec) => (
            <div className="recognition-card" key={rec.id}>
              {/* Top Image */}
              <div
                className="rec-image"
                style={{ backgroundImage: `url(${rec.image})` }}
              ></div>

              {/* Name and Button */}
              <div className="rec-header">
                <h3 className="innerpage-subtitle">{rec.name}</h3>
                <button className="button" id="rec-btn">View More</button>
              </div>

              {/* UL/LI List */}
              <ul className="page-list">
                {rec.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recognitions;
