import { FormControl, FormLabel, Input } from "@mui/joy";
import React from "react";

const CustomInputFile = ({
  label,
  accept,
  setInputValue,
  errorMessages,
  type,
}) => {
  const handleInputValue = (e, newValue) => {
    setInputValue(e.target.files[0]);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <FormLabel>{label}</FormLabel>
      <Input
        size="lg"
        accept={accept}
        type={type}
        onChange={handleInputValue}
        multiple
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

export default CustomInputFile;
