import React from "react";

const SingleTestimonial = ({ profileImg, name, profession }) => {
  return (
    <div className="testimonial-item bg-light rounded p-3">
      <div className="bg-white border rounded p-4">
        <p>
          Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum
          rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd
          erat eos
        </p>
        <div className="d-flex align-items-center">
          <img
            className="img-fluid flex-shrink-0 rounded"
            src={profileImg}
            style={{ width: "45px", height: "45px" }}
          />
          <div className="ps-3">
            <h6 className="fw-bold mb-1">{name}</h6>
            <small>{profession}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
