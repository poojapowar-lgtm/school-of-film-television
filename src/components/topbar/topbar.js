import { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Banner from "../banner/Banner";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <Navbar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Topbar;
