import React from "react";
import { FaEye ,FaAward } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import "./vision.css";

const Vision = () => {
  const visionData = [
    {
      icon: <FaEye size={60} />,
      title: "Our Vision",
      description:
        "To be a centre of excellence in cinema and screen performance education, advancing the art and craft of filmmaking through rigorous practice, innovation, and strong industry engagement, while nurturing students into accomplished filmmakers and performers.",
    },
    {
      icon: <TbTargetArrow size={60} />,
      title: "Our Mission",
      description:
        "To offer internationally benchmarked, production-driven education focused exclusively on cinema and screen-based storytelling, supported by professional infrastructure, experienced faculty, and strong industry engagement. The school aims to develop student’s aesthetic sensibility, technical expertise, creative discipline, and collaborative skills, preparing them to work confidently across all platforms where cinema is created and experienced.",
    },
    {
      icon: <FaAward size={60} />,
      title: "Our Values",
      description:
        "To develop industry-ready filmmakers and screen performers by imparting internationally benchmarked education rooted in production-based learning. The school aims to cultivate strong aesthetic sensibility, technical expertise, critical thinking, and collaborative skills—enabling students to create meaningful cinematic works and adapt to evolving global film, television, and OTT industries. ",
    },
  ];

  return (
    <div>
      <h2 className="innerpage-title">Vision, Mission & Objectives</h2>
      <section className="vision-section" id="vision">
        <div className="vision-cards">
          {visionData.map((item, index) => (
            <div className="vision-card" key={index}>
              <div className="vision-icon">{item.icon}</div>
              <h5 className="vision-title">{item.title}</h5>
              <p className="vision-text">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Vision;
