import { FormControl, Textarea } from "@mui/joy";
import React from "react";

const CustomTextarea = ({ label, value, setInputValue, errorMessages }) => {
  const handleInputValue = (e, newValue) => {
    setInputValue(e.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <Textarea
        minRows={2}
        size="lg"
        placeholder={label}
        value={value}
        onChange={handleInputValue}
        sx={{
          width: "100%",
          fontSize: 15,
        }}
      />
      {/* <FormHelperText
        error={errorMessages}
        sx={{ color: "#FF6347", fontWeight: "normal", fontSize: 13 }}
      >
        {errorMessages}
      </FormHelperText> */}
    </FormControl>
  );
};

export default CustomTextarea;
