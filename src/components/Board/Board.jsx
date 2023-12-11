import { Container } from "@mui/joy";
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from "react";
import useRent from "../../Hooks/useRent";
import DashNavbar from "../Navbar/DashNav/DashNavbar";
import SingleProperty from "../PropertyList/SingleProperty/SingleProperty";
import "./Board.css";

const Board = () => {
      const [rent,loading , refetch ] = useRent();
      // const [rent, setRent] = useState([]);
      // useEffect( ()=>{
      //       fetch('http://localhost:5000/rent')
      //       .then( res => res.json() )
      //       .then(data =>{
      //             setRent(data)
      //       })
      // }, [] )

  return (
    <div id="content" className="">
      <DashNavbar />
       
       {/* load rent data */}
       <Container className='mt-5 ' item sx={{ padding: 1 }} >
          <Grid  container  >
                {
                      rent.map( (rentData)=> <SingleProperty  
                            delayTime="0.3s" rentData={rentData} key={rentData._id} 
                      ></SingleProperty> )
                }
            
          </Grid>
       </Container>
    </div>
  );
};

export default Board;
