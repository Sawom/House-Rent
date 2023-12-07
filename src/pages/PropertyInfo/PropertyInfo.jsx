import React from "react";
import property1 from "../../assets/images/property-1.jpg";
import property2 from "../../assets/images/property-2.jpg";
import property3 from "../../assets/images/property-3.jpg";
import property4 from "../../assets/images/property-4.jpg";
import property5 from "../../assets/images/property-5.jpg";
import property6 from "../../assets/images/property-6.jpg";
import DashNavbar from "../../components/Navbar/DashNav/DashNavbar";
import PropertyDetails from "../../components/PropertyList/PropertyDetails/PropertyDetails";

const PropertyInfo = () => {
  return (
    <div className="container">
      <DashNavbar />
      <PropertyDetails
        images={[
          property1,
          property2,
          property3,
          property4,
          property5,
          property6,
        ]}
      />
    </div>
  );
};

export default PropertyInfo;
