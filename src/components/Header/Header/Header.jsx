import React from "react";

import HeaderCarousel from "../HeaderCarousel/HeaderCarousel";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./Header.css";

const Header = () => {
  return (
    <div className="container header bg-white p-0 overflow-hidden">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row pt-4">
        <HeaderContent />
        <HeaderCarousel />
      </div>
    </div>
  );
};

export default Header;
