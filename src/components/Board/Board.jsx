import { Container } from "@mui/joy";
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DashNavbar from "../Navbar/DashNav/DashNavbar";
import SingleProperty from "../PropertyList/SingleProperty/SingleProperty";
import "./Board.css";
import useRent from "../../Hooks/useRent";

const Board = () => {
  const [rent,loading , refetch ] = useRent();

  return (
    <div id="content" className="">
      <DashNavbar />
      <Container sx={{ padding: 2 }} spacing={3}>
        <div className="row">
                <Grid container item  >
                    {
                        rent.map( (rentData)=> <SingleProperty
                          delayTime="0.3s" rentData={rentData} key={rentData._id} 
                        ></SingleProperty> )
                    }
                </Grid>
          
        </div>
      </Container>
    </div>
  );
};

export default Board;
