import React from "react";
import CategoryHeader from "../CategoryHeader/CategoryHeader";
import SingleCategory from "../SingleCategory/SingleCategory";
import "./Categories.css";

const Categories = () => {
  return (
    <div id="category" className="container-xxl py-5">
      <div className="container">
        <CategoryHeader />
        <div className="row g-4">
          <SingleCategory />
        </div>
      </div>
    </div>
  );
};

export default Categories;
