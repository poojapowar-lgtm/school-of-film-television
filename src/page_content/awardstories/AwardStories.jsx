import React from "react";
import "./awardstories.css";
import InnerBanner from "../../components/inner_banner/InnerBanner";
import DividerWithTitle from "../../components/reuseable_components/DividerWithTitle/DividerWithTitle";

const AwardStories = () => {
  const bgImage = "/assets/images/home/national_award.webp";
  const title = "Award-Winning Stories";
  const subtitle = "Start Your Journey With Us";

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
    ,
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
    }
    ,
    {
      film: "Siya",
      award: "Kalakari Film Festival of India Certificate of Appreciation",
      student: "Director & VFX-Hetansa Rajkotia",
    },
    ,
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
    ,
    {
      film: "Siya",
      award: "Kalakari Film Festival of India Certificate of Appreciation",
      student: "Director & VFX-Hetansa Rajkotia",
    },
    ,
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
    ,
    {
      film: "Siya",
      award: "Kalakari Film Festival of India Certificate of Appreciation",
      student: "Director & VFX-Hetansa Rajkotia",
    },
    ,
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

  return (
    <>
      <InnerBanner bgImage={bgImage}/>
      <div className="awards-section">
        <DividerWithTitle title="Award-Winning Stories by Our Students" />

        <div className="awards-row five">
          {awardsData.map((item, index) => (
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
      </div>
    </>
  );
};

export default AwardStories;
