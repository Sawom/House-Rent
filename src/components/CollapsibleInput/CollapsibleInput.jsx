import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '300px', // Adjust the width as needed
    // margin: '20px',
    marginTop: "10px",
  },
  categoryLabel: {
    // backgroundColor: '#f0f0f0',
    borderBottom: "1px solid rgba(240, 240, 240, 1)",
    paddingLeft: "2em",
    fontWeight: "bold",
    // padding: "0px !important",
  },
  customSelector: {
    "&.checked": {
      color: "#00b98e !important", // Replace with the desired color
    },
  },
}));

const CollapsibleInput = ({
  parentState,
  onParentStateChange,
  label,
  options,
  onlyOption,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);

  // const handlePanelChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
  const handlePanelShow = () => {
    setExpanded(!expanded);
  };

  const handleRadioChange = (event) => {
    // Update parent state
    onParentStateChange(event.target.value);
  };
  console.log("expanded: ", expanded);
  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded}
        // onChange={handlePanelChange("panel1")}
        onChange={handlePanelShow}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.categoryLabel}
        >
          {label}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RadioGroup value={parentState} onChange={handleRadioChange}>
            {options.map((option) => (
              <FormControlLabel
                key={onlyOption ? option : option.value}
                label={onlyOption ? option : option.label}
                control={
                  <Radio
                    value={onlyOption ? option : option.value}
                    style={{ color: "#00b98e", paddingLeft: "1.5em" }}
                  />
                }
              />
            ))}
          </RadioGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default CollapsibleInput;
