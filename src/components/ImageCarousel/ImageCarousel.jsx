import React from "react";
import Slider from "react-slick";

const ImageCarousel = ({ images }) => {
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
      {images?.map((img, index) => (
        <div key={index} className="owl-carousel-item">
          <img className="img-fluid" src={img} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
