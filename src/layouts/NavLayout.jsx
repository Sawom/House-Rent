import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import WOW from "wow.js";
import Footer from "../components/Footer/Footer/Footer";
import Navbar from "../components/Navbar/HomeNav/HomeNavbar";

const NavLayout = () => {
  // Initialize wow function for animation
  useEffect(() => {
    const wow = new WOW({ live: false }); // disables sync requirement
    wow.init();
  }, []);

  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  );
};

export default NavLayout;
