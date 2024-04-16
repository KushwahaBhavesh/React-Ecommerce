import React from "react";
import wallpaper from "../../assets/wallpaper.png";
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <>
      <section className="container-fluid vh-75 ">
        <div
          className="px-4 pt-5 text-center border-bottom"
          style={{ margin: "2% 0" }}
        >
          <h1 className="display-4 fw-bold text-body-emphasis ">
            Welcome to EazyBuy <br /> Where Quality Meets Convenience!
          </h1>
          <div className="col-lg-6 mx-auto ">

            <p className="lead">
              From the latest fashion trends to cutting-edge gadgets, from home essentials to fitness gear, we have it all. Our diverse range of products ensures that there's something for everyone, no matter your taste or lifestyle.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">

              <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
                <HashLink to="#heroSlider" className="link-light  link-underline-opacity-0">Get started</HashLink>
              </button>

            </div>
          </div>
          <div className="overflow-hidden" style={{ maxHeight: "50vh" }}>
            <div className="container  ">
              <img loading="lazy"
                src={wallpaper}
                className="img-fluid border rounded-3 shadow-lg "
                alt="Example image"
                width="900"
                height="750"
              />
              {/* <Login/> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
