import React from "react";
import Slider from "react-slick";
import testImg1 from "../../../assets/images/testimonial-1.jpg";
import testImg2 from "../../../assets/images/testimonial-2.jpg";
import testImg3 from "../../../assets/images/testimonial-3.jpg";
import SingleTestimonial from "../SingleTestimonial/SingleTestimonial";
import TestimonialHeader from "../TestimonialHeader/TestimonialHeader";
import "./Testimonial.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Testimonial = () => {
  // const settings = {
  //   autoplay: true,
  //   autoplaySpeed: 1500,
  //   slidesToShow: 1,
  //   dots: true,
  //   infinite: true,
  //   // arrows: true,
  //   // prevArrow: <PrevArrow />,
  //   // nextArrow: <NextArrow />,
  //   nextArrow: <BiArrowRight />,
  //   prevArrow: <BiArrowLeft />,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ]
  // };

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
    <div id="testimonial" className="container-xxl py-5">
      <div className="container">
        <TestimonialHeader />
        <div
          className="owl-carousel testimonial-carousel wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <Slider {...settings}>
            <SingleTestimonial
              profileImg={testImg1}
              name="Elizabeth Swann"
              profession="Teacher"
            />
            <SingleTestimonial
              profileImg={testImg2}
              name="Hector Barbossa"
              profession="Banker"
            />
            <SingleTestimonial
              profileImg={testImg3}
              name="Jack Sparrow"
              profession="Web developer"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
