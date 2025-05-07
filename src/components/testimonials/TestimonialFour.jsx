import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/img/testimonial/tes4/test-bg1.jpg";
import bg1 from "../../assets/img/testimonial/tes4/test-bg2.jpg";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const TestimonialFour = () => {
  const testimonials = [
    {
      src: bg,
      // title: "Monica Regan",
      // designation: "CEO, Regan Co",
      description:
        "Life Science Robotics revolutionizes healthcare with cutting-edge medical robotics for rehabilitation and diagnostics. Their advanced systems, ROBERT® for intensive patient mobilization and HERA® for robot-assisted ultrasound, set new standards in care. With a global footprint, they empower healthcare professionals to enhance patient recovery and precision diagnostics.",
      link:"https://www.lifescience-robotics.com/"
    },
    {
      src: bg1,
      // title: "John Doe",
      // designation: "CTO, Tech Solutions",
      description:
        "GoldenAll specializes in advanced Anti-Gravity Treadmills, delivering intelligent and personalized rehabilitation solutions. With a dedicated core technology team, they integrate innovative design to enhance motor recovery and rehabilitation outcomes. Committed to excellence, GoldenAll ensures top-quality technology for a healthier future.",
        link:"https://www.goldenall.com"
      },
  ];

  const swiper_settings = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    a11y: false,
    navigation: {
      prevEl: ".td-testimonial-4-prev",
      nextEl: ".td-testimonial-4-next",
    },
  };

  return (
    <div className="td-testimonial-area  pt-100 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <div className="td-testimonial-title-wrap mb-80">
              <span className="td-section-title-pre td-black mb-10">
                Clients Thinking
              </span>
              <h2 className="td-section-title td-white">Testimonials</h2>
            </div>
          </div>

          <div className="col-lg-4 col-md-5">
            <div className="td-testimonial-4-btn d-flex justify-content-end">
              <div className="td-testimonial-4-btn-inner">
                <div className="td-testimonial-4-prev">
                  <i className="fa-sharp fa-regular fa-arrow-left"></i>
                </div>
                <div className="td-testimonial-4-next">
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="td-testimonial-4-border pb-100">
              <div className="swiper-container td-testimonial-4-slider-active">
                <div className="swiper-wrapper">
                  <Swiper {...swiper_settings}>
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="swiper-slide">
                          <div className="row">
                            <div className="col-lg-3 col-md-3">
                              <div className="td-testimonial-avater">
                                {/* <div className="td-testimonial-avater-thumb mb-40">
                                  <img src={testimonial.src} alt="thumb" />
                                </div> */}
                                {/* <div className="td-testimonial-avater-info">
                                  <h5 className="td-testimonial-avater-title">
                                    {testimonial.title}
                                  </h5>
                                  <span className="td-testimonial-avater-designation">
                                    {testimonial.designation}
                                  </span>
                                </div> */}
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                              <div className="td-testimonial-4-content">
                                <span></span>
                                {/* <img
                                  className="mb-40 d-none d-md-block"
                                  src={testimonial.src}
                                  alt="pattern"
                                  height={100}
                                /> */}
                                <p style={{color:"black"}}>"{testimonial.description}"</p>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
          <div className="col-lg-8 col-md-8">
            <div className="td-testimonial-4-bottom-content pt-30">
              {/* <h4 className="td-testimonial-4-title">
                Hire us for your next project.
              </h4> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="td-testimonial-4-bottom-btn td-hero-4-btn d-flex justify-content-end pt-30">
              <Link to={testimonial.link} target="_blank" className="td-btn td-btn-8 td-left-right">
                View More
                <span className="td-arrow-angle ml-10">
                  <svg
                    className="td-arrow-svg-top-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10.00 10.00"
                  >
                    <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                    <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
                        </div>
                        
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};
