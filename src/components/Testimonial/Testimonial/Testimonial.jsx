import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import testImg1 from "../../../assets/images/testimonial-1.jpg";
import testImg2 from "../../../assets/images/testimonial-2.jpg";
import testImg3 from "../../../assets/images/testimonial-3.jpg";
import SingleTestimonial from "../SingleTestimonial/SingleTestimonial";
import TestimonialHeader from "../TestimonialHeader/TestimonialHeader";
import "./Testimonial.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const Testimonial = () => {
  const [review, setReview] = useState([]);

   // load reviews
    useEffect(()=>{
        fetch('http://localhost:5000/review')
            .then(res=> res.json())
            .then( (data) => {
                setReview(data)
            })
            
    },[])


  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    margin: 24,
    nextArrow: <NavigateNextIcon />,
    prevArrow: <KeyboardArrowLeftIcon />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonial" className="container py-5  ">
      <div className="container ">
        <TestimonialHeader />
        
          
        <Swiper spaceBetween={30} 
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}  >
          {
              review.map( (quote)=> <SwiperSlide  className="container px-5"
                      key={quote._id} >
                      <div className=" mx-24 my-16 " >
                          <Rating className="mx-auto" style={{ maxWidth: 150 }} value={quote.rating} readOnly  /> <br />
                          <p> {quote.review} </p> <br />
                          <p className='' > {quote.name} </p>
                      </div>
              </SwiperSlide> )
          }
        </Swiper>


        
        
      </div>
    </div>
  );
};

export default Testimonial;
