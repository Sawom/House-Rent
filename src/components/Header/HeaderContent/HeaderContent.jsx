import React from "react";

const HeaderContent = () => {
  return (
    <div className="col-md-6 header_content">
      <h1 className="display-5 animated fadeIn mb-4">
        Find A <span className="text-primary">Perfect Home</span> To Live With
        Your Family
      </h1>
      <p className="animated fadeIn mb-4 pb-2">
        Welcome to our online platform, where the search for your ideal home begins – a place where comfort, convenience, and family come together seamlessly. 
      </p>
      <a
        href="/addproperty"
        className="btn btn-primary py-3 px-5 me-3 animated fadeIn"
      >
        Get Started
      </a>
    </div>
  );
};

export default HeaderContent;
