// ProgramHighlights.jsx
import React from "react";
import "./program-highlights.css";

const ProgramHighlights = () => {
  return (
    <section className="program-highlights">
      <div className="hg-content-wrapper">
        <h2 className="hg-title">Program Highlights</h2>

        {/* Single vertical list */}
        <ul className="vertical-list">
        <li className="list-title">B.Sc. in Filmmaking</li>
          <li>Learn filmmaking by making films, not just studying theory</li>
          <li>Production-focused curriculum aligned with industry standards</li>
          <li>Access to professional studios and high-end equipment</li>
          <li>
            Strong foundation for diverse careers within the cinematic ecosystem
          </li>
        </ul>

        {/* Two lists side by side */}
        <div className="horizontal-lists">
          <ul className="hg-list">
       <li className="list-title">M.Sc. in Filmmaking</li>
            <li>
              Advanced specialization aligned with international filmmaking
              practices
            </li>
            <li>
              Strong emphasis on creative leadership and independent filmmaking
            </li>
            <li>Professional-grade productions evaluated by industry juries</li>
            <li>
              Ideal for graduates aiming for senior creative, technical, or
              independent cinema roles
            </li>
          </ul>

          <ul className="hg-list">
               <li className="list-title">    B.A. in Screen Acting</li>
        
            <li>
              Unique first-year foundation in filmmaking alongside B.Sc. in
              Filmmaking students
            </li>
            <li>
              Deep understanding of camera, direction, editing, sound, and
              post-production
            </li>
            <li>Regular performance shoots and on set experience</li>
            <li>
              Ideal pathway for professional careers in cinema, OTT platforms,
              and screen-based performance
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
