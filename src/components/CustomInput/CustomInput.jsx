import { FormControl, FormHelperText, Input } from "@mui/joy";
import React from "react";

const CustomInput = ({ label, type, value, setInputValue, errorMessages }) => {
  const handleInputValue = (e, newValue) => {
    setInputValue(e.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <Input
        size="lg"
        type={type}
        placeholder={label}
        value={value}
        onChange={handleInputValue}
        sx={{
          width: "100%",
          fontSize: 15,
          '&::before': {
            display: 'none',
          },
          '&:focus-within': {
            outline: 'none',
            // outline: '2px solid var(--Input-focusedHighlight)',
            // outlineOffset: '2px',
          },
        }}
      />
      <FormHelperText
        error={errorMessages}
        sx={{ color: "#FF6347", fontWeight: "normal", fontSize: 13 }}
      >
        {errorMessages}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomInput;
