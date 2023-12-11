import React from "react";
import Slider from "react-slick";
import useRent from "../../Hooks/useRent";

const ImageCarousel = ({ images }) => {
  const [rent,loading , refetch ] = useRent();

  const settings = {
    // dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="owl-carousel header-carousel">
      {rent.map((item, index) => (
        <div key={index} className="owl-carousel-item">
          <img className="img-fluid" src={item.img2} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
