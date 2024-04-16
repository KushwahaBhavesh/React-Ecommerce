import { useEffect, useState } from "react";


const HeroSlider = () => {
  const imgUrl = [
    {
      url: "../src/assets/slider-banner/1.jpg",
    },
    {
      url: "../src/assets/slider-banner/2.jpg",
    },
    {
      url: "../src/assets/slider-banner/3.jpg",
    },
  ];


  return (
    <>
      <section className="container-fluid pt-5" id="heroSlider">
        <div id="carouselExampleInterval" className="carousel slide mt-2" data-bs-ride="carousel">
          <div className="carousel-inner">

            {imgUrl.map((item, index) => (<div className='carousel-item active' data-bs-interval="3000">
              <img loading="lazy"  src={item.url} className="d-block w-100 " alt="..." style={{ height: "300px", objectFit: "cover" }} />
            </div>
            ))}


          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>

          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>

          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
