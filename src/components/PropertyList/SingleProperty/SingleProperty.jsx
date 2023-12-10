import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../pages/Auth/useAuth/useAuth";

const SingleProperty = ({ propertyImg, delayTime, bgwhite, rentData }) => {
  const { _id, code, name, category, gender, propertytype, balcony,
     bedroom, bathroom, floor, division,  district, thana, availablefrom, rent, summary, addedby, img1, img2  } = rentData;
  
  const {user} = useAuth();

  let navigate = useNavigate();
  const location = useLocation();
  
  // Conditionally update styles based on bgwhite
  const conditionalStyles = {
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
    borderBottom: "1px solid rgba(240, 240, 240, 1)",
    backgroundColor: bgwhite === "false" ? "var(--light)" : "white",
  };

  return (
    <div
      className="col-lg-4 py-2 col-md-6 wow fadeInUp"
      data-wow-delay={delayTime}
    >
      <div
        className={`property-item rounded overflow-hidden `}
        style={conditionalStyles}
      >
        <div className="position-relative overflow-hidden">
          <a href="/property-info">
            <img className="img-fluid" src={propertyImg} alt="" />
          </a>
          <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
            For Family
          </div>
          <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
            Room
          </div>
        </div>
        <div className="p-4 pb-0">
          <h5 className="text-primary mb-3">$12,345</h5>
          <a className="d-block h5 mb-2" href="/property-info">
            Golden Urban House For Sell
          </a>
          <p>
            <i className="fa fa-map-marker-alt text-primary me-2"></i>123
            Street, New York, USA
          </p>
        </div>
        <div className="d-flex border-top">
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft
          </small>
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-bed text-primary me-2"></i>3 Bed
          </small>
          <small className="flex-fill text-center py-2">
            <i className="fa fa-bath text-primary me-2"></i>2 Bath
          </small>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
