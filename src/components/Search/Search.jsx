import { selectClasses } from "@mui/joy";
import React, { useState } from "react";
import { divisionsData } from "../../config/AddPropertyForm/Divisions";
import {
  categoryOptions,
  propertyTypeOptions,
} from "../../config/AddPropertyForm/SelectOptions";
import CustomButton from "../CustomButton/CustomButton";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./search.css";

const Search = () => {
  const [category, setCategory] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [division, setDivision] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="search"
      className="container-fluid bg-dark mb-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{ padding: "35px" }}
    >
      {/* <ParticlesAnimation /> */}
      <div id="search" className="container">
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2 align-items-center">
              <div className="col-md-4">
                {/* category input field  */}
                <CustomSelect
                  padding={4}
                  label="CATEGORY"
                  value={category}
                  setInputValue={(type) => setCategory(type)}
                  options={categoryOptions}
                  errorMessages={""}
                  selectClasses={selectClasses}
                />
              </div>
              <div className="col-md-4">
                {/* property type input field  */}
                <CustomSelect
                  padding={4}
                  label="PROPERTY TYPE"
                  value={propertyType}
                  setInputValue={(type) => setPropertyType(type)}
                  options={propertyTypeOptions}
                  errorMessages={""}
                  selectClasses={selectClasses}
                />
              </div>
              <div className="col-md-4">
                {/* divition input field  */}
                <CustomSelect
                  padding={4}
                  currentStep={2}
                  label="DIVISION"
                  options={divisionsData.map((division) => division.name)}
                  value={division}
                  setInputValue={(data) => setDivision(data)}
                  errorMessages={""}
                  selectClasses={selectClasses}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <CustomButton
              value={"Search"}
              type="button"
              className="btn btn-primary border-0 w-100 py-3"
              onClick={searchHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
