import React from "react";
import property1 from "../../../assets/images/property-1.jpg";
import property2 from "../../../assets/images/property-2.jpg";
import property3 from "../../../assets/images/property-3.jpg";
import property4 from "../../../assets/images/property-4.jpg";
import property5 from "../../../assets/images/property-5.jpg";
import property6 from "../../../assets/images/property-6.jpg";
import PropertyHeader from "../PropertyHeader/PropertyHeader";
import SingleProperty from "../SingleProperty/SingleProperty";
import "./PropertyList.css";
import LoadRent from "../../Rent/LoadRent";

const PropertyList = ({bgwhite}) => {
  return (
    <div id="propertylist" className="container-xxl py-5">
      <div className="container">
        {/* header */}
        <div
        className="text-start mx-auto mb-5 wow slideInLeft"
        data-wow-delay="0.1s"
      >
        <h1 className="mb-3">Recent Apartments</h1>
      </div>
        {/* <PropertyHeader /> */}
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <LoadRent></LoadRent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
