import React from "react";
import "./Progressbar.css";

const Progressbar = ({ currentStep }) => {
  return (
    <div className="main">
      <ul className="main-bar">
        <li>
          {/* <!-- <i class="icons awesome fa-solid fa-user"></i> --> */}
          <div
            className={`step first circle1 ${
              currentStep >= 2 ? "active" : ""
            }`}
          >
            <p>1</p>
            <i className="awesome fa-solid fa-check"></i>
          </div>
          {/* <!-- <p class="label">Basic information</p> --> */}
        </li>
        <li>
          {/* <!-- <i class="icons awesome fa-solid fa-coins"></i> --> */}
          <div className={`step circle2 ${currentStep >= 3 ? "active" : ""}`}>
            <p>2</p>
            <i className="awesome fa-solid fa-check"></i>
          </div>
          {/* <!-- <p class="label">Finances</p> --> */}
        </li>
        <li>
          {/* <!-- <i class="icons awesome fa-solid fa-house"></i> --> */}
          <div className={`step circle3 ${currentStep === 4 ? "active" : ""}`}>
            <p>3</p>
            <i className="awesome fa-solid fa-check"></i>
          </div>
          {/* <!-- <p class="label">Property</p> --> */}
        </li>
      </ul>
    </div>
  );
};

export default Progressbar;
