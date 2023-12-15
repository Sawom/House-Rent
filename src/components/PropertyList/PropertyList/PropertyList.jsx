import React from "react";
import "./PropertyList.css";
import LoadRent from "../../Rent/LoadRent";
import { Link } from "react-router-dom";

const PropertyList = ({bgwhite}) => {
  return (
    <div id="propertylist" className="container py-5">
      <div className="container">
        {/* header */}
        <div
        className="text-start mx-auto mb-5 wow slideInLeft"
        data-wow-delay="0.1s"
      >
        <h1 className="mb-3" style={{color:'#20C29C'}} >Recent Apartments</h1>
        <LoadRent></LoadRent>
        <Link 
        href="/apartments"
        className="btn btn-primary py-2 px-4 me-3 animated fadeIn"
      >
        View All
      </Link>
      </div>
        {/* <PropertyHeader /> */}
        
      </div>
    </div>
  );
};

export default PropertyList;
