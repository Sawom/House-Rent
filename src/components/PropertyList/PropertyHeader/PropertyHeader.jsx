import React from "react";
import PropertyHeaderLeft from "../PropertyHeaderLeft/PropertyHeaderLeft";
import PropertyHeaderRight from "../PropertyHeaderRight/PropertyHeaderRight";

const PropertyHeader = () => {
  return (
    <div className="row g-0 gx-5 align-items-end">
      <PropertyHeaderLeft />
      <PropertyHeaderRight />
    </div>
  );
};

export default PropertyHeader;
