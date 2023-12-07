import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormControl, FormHelperText, Option, Select } from "@mui/joy";

import React from "react";

// Custom Select Component
const CustomSelect = ({
  padding,
  currentStep,
  label,
  value,
  setInputValue,
  errorMessages,
  options,
  selectClasses,
}) => {
  const handleInputValue = (e, newValue) => {
    setInputValue(newValue);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <Select
        placeholder={label}
        indicator={<KeyboardArrowDownIcon />}
        size="lg"
        sx={{
          width: "100%",
          fontSize: 15,
          padding: { ...(padding && { padding: "15px 20px"  }), },
          [`& .${selectClasses.indicator}`]: {
            transition: "0.2s",
            [`&.${selectClasses.expanded}`]: {
              transform: "rotate(-180deg)",
            },
          },
        }}
        value={value}
        onChange={handleInputValue}
      >
        <Option value="" sx={{ fontSize: 15 }} disabled>
          {label}
        </Option>
        {options.map((option) => (
          <Option
            key={currentStep === 2 ? option : option.value}
            value={currentStep === 2 ? option : option.value}
            sx={{ fontSize: 15 }}
          >
            {/* {currentStep === 2 && console.log("setting optins", option)} */}
            {currentStep === 2 ? option : option.label}
          </Option>
        ))}
      </Select>
      <FormHelperText
        error={errorMessages}
        sx={{ color: "#FF6347", fontWeight: "normal", fontSize: 13 }}
      >
        {errorMessages}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomSelect;
