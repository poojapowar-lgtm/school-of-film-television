import React from "react";
import RajKapoor from "../page_content/homeComponents/Rajkapoor/RajKapoor";
import NationalAwards from "../page_content/homeComponents/NationalAwards/NationalAwards";
import Programs from "../page_content/homeComponents/Programs/Programs";
import Awards from "../page_content/homeComponents/Awards/Awards";
import VishwarajStudio from "../page_content/homeComponents/VishwarajStudio/VishwarajStudio";
import Mentor from "../page_content/homeComponents/Mentor/Mentor";
import Banner from "../components/banner/Banner";
import AlumniSpeak from "../page_content/homeComponents/alumnispeak/AlumniSpeak";

const Home = () => {
  return (
    <>
    <Banner/>
      <RajKapoor />
      <NationalAwards />
      <Programs />
      <Awards />
      <VishwarajStudio/>
      <Mentor/>
      <AlumniSpeak/>
    </>
  );
};

export default Home;
