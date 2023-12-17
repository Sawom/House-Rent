import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../pages/Auth/useAuth/useAuth";

const SingleProperty = ({ propertyImg, delayTime, bgwhite, rentData }) => {
  const { _id, code, name, category, gender, propertytype, balcony,
     bedroom, bathroom, floor, division,  district, thana, availablefrom, rent, summary, addedby, img1, img2  } = rentData;
  
  const {user} = useAuth();

  let navigate = useNavigate();
  const location = useLocation();

  // dynamic route url
  let url = `/apartmentsinfo/${_id}` ;
  
  const handleView = ()=>{
    if(user && user.email){
      navigate(url);
    }
    else{
        Swal.fire({
                title: 'Please login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
        })
    }
        
  }
  
  // Conditionally update styles based on bgwhite
  const conditionalStyles = {
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
    borderBottom: "1px solid rgba(240, 240, 240, 1)",
    backgroundColor: bgwhite === "false" ? "var(--light)" : "white",
  };

  const handleAddToCart = (rentData) =>{
      if(user && user.email){
          const rentItem = {rentItemId: _id, code, name,img1,rent,email: user.email }
          fetch('http://localhost:5000/carts', {
            method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(rentItem)
          })
          .then(res => res.json())
          .then( (data)=>{
            if(data.insertedId){
              // refetch(); 
              Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Added to cart',
                        showConfirmButton: false,
                        timer: 1500
                  }) 
              }
          } )
      }
      else{
          Swal.fire({
                title: 'Please login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
          }


  }

  //*********** */ rent card
  return (
    <div 
      className="col-lg-4 py-2 px-2 col-md-6 col-12 wow fadeInUp"
      data-wow-delay={delayTime} 
    >
      <div  
        className={`property-item rounded overflow-hidden `}
        style={conditionalStyles}
      >
        <div className="position-relative overflow-hidden">
          {/* img */}
          <a onClick={handleView} >
            <img className="img-fluid" src={img1} alt="" />
          </a>

          {/* category */}
          <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
            For {category}
          </div>

          <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
            Room
          </div>
          
        </div>

        <div className="p-4 pb-0">
          {/* rent */}
          <h5 className="text-primary mb-3"> {rent} BDT/Month </h5>
          <small className="text-primary " > Code: {code} </small>
          {/* name */}
          <a className="d-block h5 mb-2" onClick={handleView}>
            {name}
          </a>

          {/* division */}
          <p>
            <i className="fa fa-map-marker-alt text-primary me-2"></i>
            {division} 
          </p>

        </div>
        <div className="d-flex border-top">
          {/* balcony */}
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-ruler-combined text-primary me-2"></i> {balcony} balcony
          </small>
          {/* bedroom */}
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-bed text-primary me-2"></i> {bedroom} Bed
          </small>
          {/* bathroom */}
          <small className="flex-fill text-center py-2">
            <i className="fa fa-bath text-primary me-2"></i> {bathroom} Bath
          </small>

        </div>

        {/* buttons */}
        <br />
        <button  onClick={ ()=> handleAddToCart(rentData) } variant="contained" className="mx-3 p-2 text-white btn btn-outline-primary active" >
            <small className="d-flex"> <ShoppingCartIcon></ShoppingCartIcon>  Add To Cart </small> 
        </button>
        
        <br /> <br />
      </div>
      
    </div>
  );
};

export default SingleProperty;