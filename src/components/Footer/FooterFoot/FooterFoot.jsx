import React from "react";

const FooterFoot = () => {
  return (
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-12 text-center  mb-3 mb-md-0">
            &copy;{" "}
            <a className="border-bottom" href="#">
              House Rent
            </a>
            , All Rights Reserved. Designed By{" "}
            <a className="border-bottom" href="#">
              JMtech
            </a>
          </div>
          {/* <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <a href="">Home</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FooterFoot;
