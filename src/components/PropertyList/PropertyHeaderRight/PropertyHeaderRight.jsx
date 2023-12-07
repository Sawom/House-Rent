import React from "react";

const PropertyHeaderRight = () => {
  return (
    <div
      className="col-lg-6 text-start text-lg-end wow slideInRight"
      data-wow-delay="0.1s"
    >
      <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
        <li className="nav-item me-2">
          <a
            className="btn btn-outline-primary active"
            data-bs-toggle="pill"
            href="#tab-1"
          >
            Featured
          </a>
        </li>
        <li className="nav-item me-2">
          <a
            className="btn btn-outline-primary"
            data-bs-toggle="pill"
            href="#tab-1"
          >
            For Family
          </a>
        </li>
        <li className="nav-item me-0">
          <a
            className="btn btn-outline-primary"
            data-bs-toggle="pill"
            href="#tab-2"
          >
            For Bechelor
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PropertyHeaderRight;
