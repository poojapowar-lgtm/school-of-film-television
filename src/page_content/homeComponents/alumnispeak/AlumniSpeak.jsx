import React, { useRef } from "react";
import "./alumnispeak.css";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const alumniData = [
  {
    name: "Rahul Sharma",
    course: "B.Sc Filmmaking",
    video:
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Ananya Patil",
    course: "MBA Media Management",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Karan Mehta",
    course: "B.Des Visual Communication",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Rahul Sharma",
    course: "B.Sc Filmmaking",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Ananya Patil",
    course: "MBA Media Management",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Karan Mehta",
    course: "B.Des Visual Communication",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const AlumniSpeak = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="alumni-speak">
      <DividerWithTitle title="Alumni Speak" />

      <div className="alumni-wrapper">
        <button className="nav-btn right" onClick={scrollLeft}>
          <TbPlayerTrackPrevFilled />
        </button>

        <div className="alumni-slider" ref={sliderRef}>
          {alumniData.map((item, index) => (
            <div className="alumni-card" key={index}>
              <div className="video-box">
                <iframe
                  src={item.video}
                  title={item.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="alumni-info">
                <h4 className="alumni-name">{item.name}</h4>
                <p>{item.course}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={scrollRight}>
          <TbPlayerTrackNextFilled />
        </button>
      </div>
    </section>
  );
};

export default AlumniSpeak;
