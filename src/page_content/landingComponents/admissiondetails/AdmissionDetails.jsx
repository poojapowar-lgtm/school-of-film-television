import React, { useState } from "react";
import "./admissiondetails.css";
import DividerWithTitle from "../../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const AdmissionDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    {
      button: "Eligibility Criteria & Duration",
      cards: [
        {
          title: "B.Sc. in Filmaking",
          subtitle: "10 + 2 (Any Stream or Equivalent) \n 3 Years Program",
        },
        {
          title: "M.Sc. in Filmakin",
          subtitle: "Any Graduate \n2 Yers Program",
        },
        {
          title: "B.A. in Screen Acting",
          subtitle: "10 + 2 (Any Stream or Equivalent) \n 3 Years Program",
        },
      ],
    },
    {
      button: "Registration Process",
      cards: [
        { title: "Step 1", subtitle: "Generate Login ID \n and Password" },
        {
          title: "Step 2",
          subtitle:
            "Login using the registered credentials \n and complete the personal and educational details",
        },
        {
          title: "Step 3",
          subtitle: "Pay the registration fee \n of Rs. 1800/- online",
        },
        {
          title: "Step 4",
          subtitle:
            "After successful registration, \n Eligibility Verification is carried out.",
        },
      ],
      paragraph:
        "After successful registration, Eligibility Verification is carried out. Once verified, candidates are scheduled for the MIT SFT Filmmaking Creative Aptitude Test, which is conducted online in three stages. The test is initiated immediately after confirmation of paid registration.",
    },
    {
      button: "Selection Criteria",
      cards: [
        {
          title: "Stage 1: MCQ-Based Assessment",
          description:
            "Candidates appear for two objective test papers: English and Awareness. A Google Form link is emailed to the candidate on the scheduled date and time, through which the test is taken.",
        },
        {
          title: "Stage 2: Creative Reasoning",
          description:
            "Candidates are given one hour to complete a creative assignment. A question paper containing images and related questions is emailed to them. Students must demonstrate creative interpretation, type their answers in a Word document, and email it back within the stipulated time. The acting evaluation is conducted directly during the personal interview.",
        },
        {
          title: "Stage 3: Personal Interview",
          description:
            "A personal interview is conducted to assess candidates on three key parameters:",
            desclist: [
              " Interest in Filmmaking and its Techniques",
              " Eagerness to Learn",
              "Knowledge of the Specialization Applied For",
            ],
        },
      ],
    },
  ];

  return (
    <section className="admission-details">
      <DividerWithTitle title="Career Opportunities" />
      {/* Buttons */}
      <div className="admission-buttons">
        {sections.map((sec, index) => (
          <button
            key={index}
            className={`button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {sec.button}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="admission-content">
        <div className="card-row">
          {sections[activeTab].cards.map((card, index) => (
            <div className="admission-card" key={index}>
              <h4>{card.title}</h4>

              {/* Subtitle (only if exists) */}
              {card.subtitle && (
                <h5 className="subtitle">
                  {card.subtitle.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h5>
              )}

              {/* Description (only if exists) */}
              {card.description && (
                <p className="description">{card.description}</p>
              )}

              {/* List from des array */}
              {card.desclist && (
                <ul className="desc-list">
                  {card.desclist.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Paragraph only for second section */}
        {sections[activeTab].paragraph && (
          <p className="info-text">{sections[activeTab].paragraph}</p>
        )}
      </div>
    </section>
  );
};

export default AdmissionDetails;
