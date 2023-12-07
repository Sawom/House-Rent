import React, { useState } from "react";
import Progressbar from "../Progressbar/Progressbar";
import PropertyForm from "../PropertyForm/PropertyForm";
import "./AddProperty.css";

const AddProperty = () => {
  // Current Step
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="page-wrapper my-md-5 my-3 mx-3">
      <div className="wrapper wrapper--w680">
        <div className="card card-1">
          <div className="card-heading"></div>
          <div className="card-body">
            <Progressbar currentStep={currentStep} />
            <PropertyForm
              currentStep={currentStep}
              stepHandler={(step) => setCurrentStep(step)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
