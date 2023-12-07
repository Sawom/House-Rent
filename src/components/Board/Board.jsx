import { Container } from "@mui/joy";
import React from "react";

import property1 from "../../assets/images/property-1.jpg";
import property2 from "../../assets/images/property-2.jpg";
import property3 from "../../assets/images/property-3.jpg";
import DashNavbar from "../Navbar/DashNav/DashNavbar";
import SingleProperty from "../PropertyList/SingleProperty/SingleProperty";
import "./Board.css";

const Board = () => {
  return (
    <div id="content" className="">
      <DashNavbar />
      <Container sx={{ padding: 2 }}>
        <div className="row">
          <SingleProperty propertyImg={property1} delayTime="0.1s" />
          <SingleProperty propertyImg={property2} delayTime="0.3s" />
          <SingleProperty propertyImg={property3} delayTime="0.5s" />
          <SingleProperty propertyImg={property3} delayTime="0.5s" />
          <SingleProperty propertyImg={property1} delayTime="0.1s" />
          <SingleProperty propertyImg={property2} delayTime="0.3s" />
          <SingleProperty propertyImg={property3} delayTime="0.5s" />
          <SingleProperty propertyImg={property3} delayTime="0.5s" />
        </div>
      </Container>
    </div>
  );
};

export default Board;
