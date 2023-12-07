import React, { useEffect, useState } from "react";
import { divisionsData } from "../../config/AddPropertyForm/Divisions";
import {
  categoryOptions,
  monthOptions,
  propertyTypeOptions,
} from "../../config/AddPropertyForm/SelectOptions";
import CollapsibleInput from "../CollapsibleInput/CollapsibleInput";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  // Basic information
  const [category, setCategory] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [rent, setRent] = useState(null);

  // location information
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [thana, setThana] = useState("");

  //selected districts, upazilas
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState([]);

  // sidebar toggle function
  const handleSidebarToggle = () => {
    setSidebarActive(!sidebarActive);
  };

  // Effects for dynamic dropdowns
  useEffect(() => {
    const selectedDis = divisionsData?.find(
      (divisionName) => divisionName.name === division
    )?.districts;

    if (selectedDis) {
      setSelectedDistrict(selectedDis);
      setDistrict(selectedDis[0]?.name);
    }
    const selectedUp = selectedDis?.find(
      (districtName) => districtName.name === selectedDis[0]?.name
    )?.upazilas;

    if (selectedUp) {
      setSelectedUpazila(selectedUp);
      setThana(selectedUp[0]);
    }
  }, [division]);

  useEffect(() => {
    const selectedUp = selectedDistrict?.find(
      (districtName) => districtName.name === district
    )?.upazilas;

    if (selectedUp) {
      setSelectedUpazila(selectedUp);
      setThana(selectedUp[0]);
    }
  }, [district]);

  return (
    <nav id="sidebar" className={sidebarActive ? "active" : ""}>
      <div className="custom-menu">
        <button
          type="button"
          id="sidebarCollapse"
          className="btn btn-primary bg-white"
          onClick={() => handleSidebarToggle()}
        >
          <i className="fa fa-bars"></i>
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
      <h1>
        <a href="/" className="logo">
          House Rent
        </a>
      </h1>
      <ul className="list-unstyled components mb-5">
        <CollapsibleInput
          parentState={category}
          onParentStateChange={(value) => setCategory(value)}
          label="Category"
          options={categoryOptions}
        />
        <CollapsibleInput
          parentState={propertyType}
          onParentStateChange={(value) => setPropertyType(value)}
          label="Property Type"
          options={propertyTypeOptions}
        />
        <CollapsibleInput
          onlyOption="true"
          parentState={availableFrom}
          onParentStateChange={(value) => setAvailableFrom(value)}
          label="Available From"
          options={monthOptions}
        />
        <CollapsibleInput
          onlyOption="true"
          parentState={division}
          onParentStateChange={(value) => setDivision(value)}
          label="Division"
          options={divisionsData.map((division) => division.name)}
        />
        <CollapsibleInput
          onlyOption="true"
          parentState={district}
          onParentStateChange={(value) => setDistrict(value)}
          label="District"
          options={selectedDistrict?.map((districtName) => districtName.name)}
        />
        <CollapsibleInput
          onlyOption="true"
          parentState={thana}
          onParentStateChange={(value) => setThana(value)}
          label="Area/Thana"
          options={selectedUpazila?.map((upazilaName) => upazilaName)}
        />
      </ul>
    </nav>
  );
};

export default Sidebar;
