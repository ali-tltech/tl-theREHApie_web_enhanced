import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";
import useTestimonialStore from "../../store/useTestimonialStore";

export const TestimonialFour = () => {
  const { testimonials, loading, error, fetchTestimonials } = useTestimonialStore();

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

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

  // Loading state
  if (loading) {
    return (
      <div className="td-testimonial-area pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="loading-spinner">
                <p>Loading testimonials...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="td-testimonial-area pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="error-message">
                <p>Error loading testimonials: {error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="td-testimonial-area pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="no-testimonials">
                <p>No testimonials available at the moment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="td-testimonial-area pt-100 pb-60">
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
                      <SwiperSlide key={testimonial.id || index}>
                        <div className="swiper-slide">
                          <div className="row">
                            <div className="col-lg-3 col-md-3">
                              <div className="td-testimonial-avater">
                                {testimonial.image && (
                                  <div className="td-testimonial-avater-thumb mb-40">
                                    <img src={testimonial.image} alt="testimonial" />
                                  </div>
                                )}

                                {testimonial.author && testimonial.position && (
                                  <div className="td-testimonial-avater-info">
                                    <h5 className="td-testimonial-avater-title">
                                      {testimonial.author}
                                    </h5>
                                    <span className="td-testimonial-avater-designation">
                                      {testimonial.position}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                              <div className="td-testimonial-4-content">
                                <span></span>
                                <p style={{ color: "black" }}>
                                  "{testimonial.text}"
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8">
                              <div className="td-testimonial-4-bottom-content pt-30">
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-4">
                              <div className="td-testimonial-4-bottom-btn td-hero-4-btn d-flex justify-content-end pt-30">
                                {testimonial.TestimonialUrl && (
                                  <Link
                                    to={testimonial.TestimonialUrl}
                                    target="_blank"
                                    className="td-btn td-btn-8 td-left-right"
                                  >
                                    View More
                                    <span className="td-arrow-angle ml-10">
                                      <svg
                                        className="td-arrow-svg-top-right"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10.00 10.00"
                                      >
                                        <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5847Z" />
                                        <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                                      </svg>
                                    </span>
                                  </Link>
                                )}
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