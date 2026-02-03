// import React from "react";
// import Divider from "../divider/Divider";
// import "./divider_title.css";

// const DividerWithTitle = ({ title }) => {
//   return (
//     <div className="divider-title-row">
//       <Divider direction="left" />
//       <h1 className="title"> {title}</h1>
//       <Divider direction="right" />
//     </div>
//   );
// };

// export default DividerWithTitle;


import React, { useState, useEffect } from "react";
import Divider from "../divider/Divider";
import "./divider_title.css";

const DividerWithTitle = ({ title }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // threshold for mobile
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="divider-title-row">
      {!isMobile && <Divider direction="left" />}
      <h1 className="title">{title}</h1>
      {!isMobile && <Divider direction="right" />}
    </div>
  );
};

export default DividerWithTitle;
