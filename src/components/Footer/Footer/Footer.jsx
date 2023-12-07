import React from "react";
import FooterFoot from "../FooterFoot/FooterFoot";
import FooterHead from "../FooterHead/FooterHead";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-white-50 footer pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <FooterHead />
      <FooterFoot />
    </div>
  );
};

export default Footer;
