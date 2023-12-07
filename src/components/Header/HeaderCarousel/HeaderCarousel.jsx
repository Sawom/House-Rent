import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ImageCarousel from "../../ImageCarousel/ImageCarousel";

// desing by FREEPIK
import carouselImg1 from "../../../assets/images/carousel1.jpg";
import carouselImg2 from "../../../assets/images/carousel2.svg";

const HeaderCarousel = () => {
  return (
    <div className="col-md-6 animated fadeIn">
      <ImageCarousel images={[carouselImg1, carouselImg2]} arrow={false}/>
    </div>
  );
};

export default HeaderCarousel;
