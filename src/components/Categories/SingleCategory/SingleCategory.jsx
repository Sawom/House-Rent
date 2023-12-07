import React from "react";

const SingleCategory = () => {
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <a className="cat-item d-block bg-light text-center rounded p-3" href="">
        <div className="rounded p-4">
          <div className="icon mb-3">
            <img
              className="img-fluid"
              src="img/icon-apartment.png"
              alt="Icon"
            />
          </div>
          <h6>Apartment</h6>
          <span>123 Properties</span>
        </div>
      </a>
    </div>
  );
};

export default SingleCategory;
