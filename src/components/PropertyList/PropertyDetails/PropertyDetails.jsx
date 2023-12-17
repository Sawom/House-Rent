import { Typography } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import ImageCarousel from "../../ImageCarousel/ImageCarousel";

const PropertyDetails = ({ images }) => {
    const {id} = useParams();
    const [appart , setAppart] = useState({});
    
    useEffect( ()=>{
      fetch(`http://localhost:5000/rent/${id}`)
        .then(data => data.json())
        .then( data => setAppart(data))
    }, [] )

    // booking url
    let navigate = useNavigate();
    // dynamic booking url
    const url = `/booking/${appart._id}`;
    const handleBooking = ()=>{
      navigate(url);
    }


  return (
    <div className="container-fluid mt-3">
      <div className="row flex-row-reverse">
        <div className="col-md-6 " style={{ padding: "0 0px 0 10px" }}>
          <div className="row mb-2">
            <div className="col-12 text-right">
              <Typography style={{ textAlign: "right" }}>
                Added by 
                <Link to={"/profile"}>
                  <span className="text-primary px-2">{appart.addedby}</span>
                </Link>
              </Typography>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <div
                className="bg-white pt-3 px-3 pb-2 rounded"
                style={{
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                  borderBottom: "1px solid rgba(240, 240, 240, 1)",
                }}
              >
                <ImageCarousel images={images} />
                <br />
                <button onClick={handleBooking} variant="contained" className="px-3 text-white btn btn-outline-primary active" >
                    <small className="d-flex"> <BeenhereIcon></BeenhereIcon>  Book Now </small> 
                </button>
                
              </div>
            </div>
          </div>
          
          {/* booking */}
          <div className="row mb-3">
            {/* <div className="col">
              <div
                className=" bg-white pt-3 px-3 pb-2 rounded"
                style={{
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                  borderBottom: "1px solid rgba(240, 240, 240, 1)",
                }}
              >
                
              </div>
            </div> */}
          </div>

        </div>
        <div className="col-md-6 " style={{ padding: "0 10px 0 0px" }}>
          <div className="row">
            <div className="col-sm-12 mb-3">
              <div
                className="card bg-white rounded"
                style={{
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                  borderBottom: "1px solid rgba(240, 240, 240, 1)",
                }}
              >
                {/* basic */}
                <div className="card-header bg-primary text-white">
                  Basic Information
                </div>
                <div className="card-body">
                  <dl className="row">
                    <dt className="col-5 col-md-4">Apartment:</dt>
                    <dd className="col-7 col-md-8"> {appart.name} </dd>

                    <dt className="col-5 col-md-4">Category:</dt>
                    <dd className="col-7 col-md-8"> {appart.category} </dd>

                    <dt className="col-5 col-md-4">Gender:</dt>
                    <dd className="col-7 col-md-8">{appart.gender} members </dd>

                    <dt className="col-5 col-md-4">Property Type:</dt>
                    <dd className="col-7 col-md-8"> {appart.propertytype} </dd>

                    <dt className="col-5 col-md-4">Balcony No:</dt>
                    <dd className="col-7 col-md-8"> {appart.balcony} </dd>

                    <dt className="col-5 col-md-4">Bedroom:</dt>
                    <dd className="col-7 col-md-8"> {appart.bedroom} </dd>

                    <dt className="col-5 col-md-4">Bathroom:</dt>
                    <dd className="col-7 col-md-8"> {appart.bathroom} </dd>

                    <dt className="col-5 col-md-4">Floor no:</dt>
                    <dd className="col-7 col-md-8"> {appart.floor} </dd>
                  </dl>
                </div>
              </div>
            </div>

            {/* location */}
            <div className="col-sm-12 mb-3">
              <div
                className="card bg-white  rounded"
                style={{
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                  borderBottom: "1px solid rgba(240, 240, 240, 1)",
                }}
              >
                <div className="card-header bg-primary text-white">
                  Location Information
                </div>
                <div className="card-body">
                  <dl className="row">
                    <dt className="col-5 col-md-4">Division:</dt>
                    <dd className="col-7 col-md-8"> {appart.division} </dd>

                    <dt className="col-5 col-md-4">District:</dt>
                    <dd className="col-7 col-md-8"> {appart.district} </dd>

                    <dt className="col-5 col-md-4">Area/Thana:</dt>
                    <dd className="col-7 col-md-8"> {appart.thana} </dd>
                  </dl>
                </div>
              </div>
            </div>

            {/* additional */}
            <div className="col-sm-12 mb-3">
              <div
                className="card bg-white  rounded"
                style={{
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                  borderBottom: "1px solid rgba(240, 240, 240, 1)",
                }}
              >
                <div className="card-header bg-primary text-white">
                  Additional Information
                </div>
                <div className="card-body">
                  <dl className="row">
                    <dt className="col-5 col-md-4">Available From:</dt>
                    <dd className="col-7 col-md-8"> {appart.availablefrom} </dd>

                    <dt className="col-5 col-md-4">Rent:</dt>
                    <dd className="col-7 col-md-8"> {appart.rent} BDT/month </dd>

                    <dt className="col-5 col-md-4">Summary:</dt>
                    <dd className="col-7 col-md-8">
                      {appart.summary}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            {/* Landlord information */}
            <div className="col-sm-12 mb-3">
              <div
                className="card bg-white  rounded"
                style={{
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                  borderBottom: "1px solid rgba(240, 240, 240, 1)",
                }}
              >
                <div className="card-header bg-primary text-white">
                  About Landlord
                </div>
                <div className="card-body">
                  <dl className="row">
                    <dt className="col-5 col-md-4">Owner: </dt>
                    <dd className="col-7 col-md-8"> {appart.addedby} </dd>

                    <dt className="col-5 col-md-4">Phone:</dt>
                    <dd className="col-7 col-md-8"> {appart.phone} </dd>

                    <dt className="col-5 col-md-4">Email:</dt>
                    <dd className="col-7 col-md-8"> {appart.email} </dd>
                  </dl>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
