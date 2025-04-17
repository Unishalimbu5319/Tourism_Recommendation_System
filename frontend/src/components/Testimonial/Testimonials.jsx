import React from "react";
import Slider from "react-slick";
import ava1 from "../../assets/images/ava-1.jpg";
import ava2 from "../../assets/images/ava-2.jpg";
import ava3 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-container">
      <Slider {...settings}>
        {/* Testimonial 1 */}
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus quo iure laborum consectetur ut eius modi illo quibusdam
            voluptas iusto corporis, aliquid in, nulla tempore fuga? Vero
            aliquid saepe alias.
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava1} className="w-25 h-25 rounded-2" alt="Avatar 1" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus quo iure laborum consectetur ut eius modi illo quibusdam
            voluptas iusto corporis, aliquid in, nulla tempore fuga? Vero
            aliquid saepe alias.
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava2} className="w-25 h-25 rounded-2" alt="Avatar 2" />
            <div>
              <h6 className="mb-0 mt-3">Jane Smith</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus quo iure laborum consectetur ut eius modi illo quibusdam
            voluptas iusto corporis, aliquid in, nulla tempore fuga? Vero
            aliquid saepe alias.
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava3} className="w-25 h-25 rounded-2" alt="Avatar 3" />
            <div>
              <h6 className="mb-0 mt-3">Alice Johnson</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus quo iure laborum consectetur ut eius modi illo quibusdam
            voluptas iusto corporis, aliquid in, nulla tempore fuga? Vero
            aliquid saepe alias.
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava3} className="w-25 h-25 rounded-2" alt="Avatar 3" />
            <div>
              <h6 className="mb-0 mt-3">Alice Johnson</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
         
      </Slider>
    </div>
  );
};

export default Testimonials;