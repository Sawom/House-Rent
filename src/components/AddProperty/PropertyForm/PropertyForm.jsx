import { Box, Stack, selectClasses } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { divisionsData } from "../../../config/AddPropertyForm/Divisions";
import {
  balconyOptions,
  bathroomOptions,
  bedroomOptions,
  categoryOptions,
  floorOptions,
  genderOptions,
  monthOptions,
  propertyTypeOptions,
} from "../../../config/AddPropertyForm/SelectOptions";
import CustomButton from "../../CustomButton/CustomButton";
import CustomInput from "../../CustomInput/CustomInput";
import CustomTextarea from "../../CustomInput/CustomTextarea";
import CustomSelect from "../../CustomSelect/CustomSelect";
import "./PropertyForm.css";

const PropertyForm = ({ currentStep, stepHandler }) => {
  const navigate = useNavigate();

  // Step 1: basic information
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [balcony, setBalcony] = useState("");
  const [floor, setFloor] = useState("");

  // Step 2: locational information
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [thana, setThana] = useState("");

  // Step 3: Additional infomation
  const [availableFrom, setAvailableFrom] = useState("");
  const [rent, setRent] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");

  //selected districts, upazilas
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState([]);

  // Error messages
  const [errorMessages, setErrorMessages] = useState({
    category: "",
    propertyType: "",
    bedroom: "",
    bathroom: "",
    balcony: "",
    floorno: "",
    division: "",
    district: "",
    thana: "",
    availableFrom: "",
    rent: "",
    gender: "",
  });

  // Validation functions 1
  const validateStep1 = () => {
    const errors = {};
    // console.log("validateStep1", category, propertyType);
    if (!category) {
      errors.category = "Category is required";
    }

    if (!gender) {
      errors.gender = "Gender is required";
    }

    if (!propertyType) {
      errors.propertyType = "Property Type is required";
    }

    if (!bedroom) {
      errors.bedroom = "Bedroom is required";
    }

    if (!bathroom) {
      errors.bathroom = "Bathroom is required";
    }

    if (!balcony) {
      errors.balcony = "Balcony is required";
    }

    if (!floor) {
      errors.floorno = "Floor is required";
    }

    setErrorMessages({ ...errorMessages, ...errors });

    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  // Validation functions 2
  const validateStep2 = () => {
    const errors = {};

    if (!division) {
      errors.division = "Division is required";
    }

    if (!district) {
      errors.district = "District is required";
    }

    if (!thana) {
      errors.thana = "Thana/Area is required";
    }

    setErrorMessages({ ...errorMessages, ...errors });

    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  // Validation functions 3
  const validateStep3 = () => {
    const errors = {};

    if (!availableFrom) {
      errors.availableFrom = "Available From is required";
    }

    if (!rent) {
      errors.rent = "Rent is required";
    }

    setErrorMessages({ ...errorMessages, ...errors });

    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  // Navigation functions
  const nextStep = (step) => {
    if (step === 2 && !validateStep1()) {
      return;
    }

    if (step === 3 && !validateStep2()) {
      return;
    }

    stepHandler(step);
  };
  const previousStep = (step) => {
    stepHandler(step);
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before submission
    if (!validateStep1() || !validateStep2() || !validateStep3()) {
      return;
    }

    const formData = new FormData();
    formData.append("category", category);
    formData.append("propertyType", propertyType);
    formData.append("bedroom", bedroom);
    formData.append("bathroom", bathroom);
    formData.append("balcony", balcony);
    formData.append("floor", floor);
    formData.append("division", division);
    formData.append("district", district);
    formData.append("thana", thana);
    formData.append("availableFrom", availableFrom);
    formData.append("rent", rent);
    formData.append("gender", gender);
    formData.append("additionalInfo", additionalInfo);

    // Append image and video files if they exist
    if (image) {
      formData.append("image", image);
    }

    if (video) {
      formData.append("video", video);
    }

    console.log("Form submitted successfully!", formData);
    console.log("district value: ===========", division, district, thana);
    console.log("Form submitted successfully! catgory", category);
    console.log("Form submitted successfully! distict", district);
    console.log("Form submitted successfully! available from", availableFrom);
    console.log("Form submitted successfully! rent", rent);
    console.log("Form submitted successfully! additional", additionalInfo);
    console.log("Form submitted successfully! iamge", image);

    // try {
    //   const response = await axios.post("your-api-endpoint", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   // Handle successful submission
    //   if (response.status === 200) {
    //     // Handle success (e.g., show a success message, redirect, etc.)
    //     console.log("Form submitted successfully!", formData);
    //   } else {
    //     // Handle other status codes or server errors
    //     console.error("Error submitting form:", response.statusText);
    //   }
    // } catch (error) {
    //   // Handle network errors or other issues
    //   console.error("Error submitting form:", error.message);
    // }

    navigate("/");
  };

  // useEffect to clear specific error messages based on state updates
  useEffect(() => {
    setErrorMessages((prevErrors) => {
      let updatedErrors = { ...prevErrors };

      // Check and clear error messages based on state updates
      if (category !== "") updatedErrors.category = "";
      if (propertyType !== "") updatedErrors.propertyType = "";
      if (bedroom !== "") updatedErrors.bedroom = "";
      if (bathroom !== "") updatedErrors.bathroom = "";
      if (balcony !== "") updatedErrors.balcony = "";
      if (floor !== "") updatedErrors.floorno = "";
      if (division !== "") updatedErrors.division = "";
      if (district !== "") updatedErrors.district = "";
      if (thana !== "") updatedErrors.thana = "";
      if (availableFrom !== "") updatedErrors.availableFrom = "";
      if (rent !== null) updatedErrors.rent = "";
      if (gender !== "") updatedErrors.gender = "";

      return updatedErrors;
    });
  }, [
    category,
    propertyType,
    gender,
    bedroom,
    bathroom,
    balcony,
    floor,
    division,
    district,
    thana,
    availableFrom,
    rent,
  ]);

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
    <form method="POST" onSubmit={handleSubmit}>
      {/* Step 1: Item Details  */}
      <div
        id="step1"
        className={`form-step ${currentStep === 1 ? "visible" : ""}`}
      >
        <h3 className="title">Basic information</h3>
        <Stack spacing={2}>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column",
              "@media (min-width: 600px)": {
                flexDirection: "row",
              },
            }}
          >
            {/* category input field  */}
            <CustomSelect
              label="CATEGORY"
              value={category}
              setInputValue={(type) => setCategory(type)}
              options={categoryOptions}
              errorMessages={errorMessages.category}
              selectClasses={selectClasses}
            />

            {/* property input field  */}
            <CustomSelect
              label="PROPERTY TYPE"
              value={propertyType}
              setInputValue={(type) => setPropertyType(type)}
              options={propertyTypeOptions}
              errorMessages={errorMessages.propertyType}
              selectClasses={selectClasses}
            />
          </Box>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column",
              "@media (min-width: 600px)": {
                flexDirection: "row",
              },
            }}
          >
            {/* gender input field  */}
            <CustomSelect
              label="GENDER"
              value={gender}
              setInputValue={(type) => setGender(type)}
              options={genderOptions}
              errorMessages={errorMessages.gender}
              selectClasses={selectClasses}
            />
          </Box>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column",
              "@media (min-width: 600px)": {
                flexDirection: "row",
              },
            }}
          >
            {/* bedroom input field  */}
            <CustomSelect
              label="BEDROOM"
              value={bedroom}
              setInputValue={(type) => setBedroom(type)}
              options={bedroomOptions}
              errorMessages={errorMessages.bedroom}
              selectClasses={selectClasses}
            />

            {/* bathroom input field  */}
            <CustomSelect
              label="BATHROOM"
              options={bathroomOptions}
              value={bathroom}
              setInputValue={(type) => setBathroom(type)}
              errorMessages={errorMessages.bathroom}
              selectClasses={selectClasses}
            />
          </Box>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column",
              "@media (min-width: 600px)": {
                flexDirection: "row",
              },
            }}
          >
            {/* balcony input field  */}
            <CustomSelect
              label="BALCONY"
              options={balconyOptions}
              value={balcony}
              setInputValue={(type) => setBalcony(type)}
              errorMessages={errorMessages.balcony}
              selectClasses={selectClasses}
            />

            {/* floor no input field  */}
            <CustomSelect
              label="FLOOR NO"
              options={floorOptions}
              value={floor}
              setInputValue={(type) => setFloor(type)}
              errorMessages={errorMessages.floorno}
              selectClasses={selectClasses}
            />
          </Box>
        </Stack>

        <CustomButton
          value={"Next"}
          type="button"
          className="btn btn-primary btn--radius px-3 mt-4 d-lg-flex"
          onClick={() => nextStep(2)}
        />
      </div>

      {/* Step 2: Locazltional information */}
      <div
        id="step2"
        className={`form-step ${currentStep === 2 ? "visible" : ""}`}
      >
        <h3 className="title">Location information</h3>

        <Stack spacing={2}>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column", // Stack items vertically on smaller screens
              "@media (min-width: 600px)": {
                flexDirection: "row", // Stack items horizontally on larger screens
              },
            }}
          >
            {/* divition input field  */}
            <CustomSelect
              currentStep={2}
              label="DIVISION"
              options={divisionsData.map((division) => division.name)}
              value={division}
              setInputValue={(data) => setDivision(data)}
              errorMessages={errorMessages.division}
              selectClasses={selectClasses}
            />

            {/* district input field  */}
            <CustomSelect
              currentStep={2}
              label="DISTRICT"
              options={selectedDistrict?.map(
                (districtName) => districtName.name
              )}
              value={district}
              setInputValue={(data) => setDistrict(data)}
              errorMessages={errorMessages.district}
              selectClasses={selectClasses}
            />
          </Box>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column", // Stack items vertically on smaller screens
              "@media (min-width: 600px)": {
                flexDirection: "row", // Stack items horizontally on larger screens
              },
            }}
          >
            {/* Area/Thana input field  */}
            <CustomSelect
              currentStep={2}
              label="AREA/THANA"
              options={selectedUpazila?.map((upazilaName) => upazilaName)}
              value={thana}
              setInputValue={(data) => setThana(data)}
              errorMessages={errorMessages.thana}
              selectClasses={selectClasses}
            />
          </Box>
        </Stack>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <CustomButton
            value={"Previous"}
            type="button"
            className="btn btn--radius prev-btn--gray px-3 d-lg-flex"
            onClick={() => previousStep(1)}
          />

          <CustomButton
            value={"Next"}
            type="button"
            className="btn btn-primary btn--radius px-3 d-lg-flex"
            onClick={() => nextStep(3)}
          />
        </div>
      </div>

      {/* Step 3: Additional information */}
      <div
        id="step3"
        className={`form-step ${currentStep === 3 ? "visible" : ""}`}
      >
        <h3 className="title">Additional information</h3>
        <Stack spacing={2}>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column", // Stack items vertically on smaller screens
              "@media (min-width: 600px)": {
                flexDirection: "row", // Stack items horizontally on larger screens
              },
            }}
          >
            {/* imgage input field  */}
            <CustomInput
              label="IMAGES"
              accept="image/*"
              value={image}
              setInputValue={(file) => setImage(file)}
              errorMessages={errorMessages.image}
              type={"file"}
            />

            {/* video input field  */}
            <CustomInput
              label="VIDEO"
              accept="video/*"
              value={video}
              setInputValue={(file) => setVideo(file)}
              errorMessages={errorMessages.video}
              type={"file"}
            />
          </Box>

          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column", // Stack items vertically on smaller screens
              "@media (min-width: 600px)": {
                flexDirection: "row", // Stack items horizontally on larger screens
              },
            }}
          >
            {/* available month input field  */}
            <CustomSelect
              currentStep={2}
              label="AVAILBLE FROM"
              options={monthOptions}
              value={availableFrom}
              setInputValue={(type) => setAvailableFrom(type)}
              errorMessages={errorMessages.availableFrom}
              selectClasses={selectClasses}
            />

            {/* Rent input field  */}
            <CustomInput
              label="RENT"
              type={"number"}
              value={rent}
              setInputValue={(type) => setRent(type)}
              errorMessages={errorMessages.rent}
            />
          </Box>

          <Box
            // gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column", // Stack items vertically on smaller screens
              "@media (min-width: 600px)": {
                flexDirection: "row", // Stack items horizontally on larger screens
              },
            }}
          >
            {/* additional information input field  */}
            <CustomTextarea
              label="ADITINAL INFORMATIONS"
              value={additionalInfo}
              setInputValue={(info) => setAdditionalInfo(info)}
              errorMessages={errorMessages.additionalInfo}
            />
          </Box>
        </Stack>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <CustomButton
            value="Previous"
            type="button"
            className="btn btn--radius prev-btn--gray px-3 d-lg-flex"
            onClick={() => previousStep(2)}
          />
          <CustomButton
            value="Submit"
            type="submit"
            className="btn btn-primary btn--radius px-3 d-lg-flex"
          />
        </div>
      </div>
    </form>
  );
};

export default PropertyForm;
