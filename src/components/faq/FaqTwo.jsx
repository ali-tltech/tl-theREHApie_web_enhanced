import React from "react";
import bgImage from "../../assets/img/faq/home4/faq-bg.jpg";

export const FaqTwo = () => {
  return (
    <div
      className="td-faq-area bg-position pt-140 pb-110"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div
              className="td-chose-title-wrap text-center mb-75 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">FAQs</span>
              <h2 className="td-section-title">Fun fact about company</h2>
            </div>
            <div className="td-faq-wrapper">
              <div
                className="accordion td-faq-4-accordion"
                id="return_faqaccordion"
              >
                <div
                  className="accordion-item td-faq-active td-faq-4-item wow fadeInUp"
                  data-wow-delay=".4s"
                  data-wow-duration="1s"
                >
                  <h2 className="accordion-header" id="digital_one">
                    <button
                      className="accordion-button td-faq-btn-2 td-faq-4-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_one"
                      aria-expanded="true"
                      aria-controls="digital__collapse_one"
                    >
                      What types of rehabilitation equipment do you provide?
                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_one"
                    className="accordion-collapse collapse show"
                    aria-labelledby="digital_one"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                      We offer a wide range of cutting-edge rehabilitation solutions, including physiotherapy devices, mobility aids, AI-powered robotics, and advanced rehab technology tailored to diverse patient needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item td-faq-4-item wow fadeInUp"
                  data-wow-delay=".6s"
                  data-wow-duration="1s"
                >
                  <h2 className="accordion-header" id="digital_two">
                    <button
                      className="accordion-button collapsed td-faq-btn-2 td-faq-4-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_two"
                      aria-expanded="false"
                      aria-controls="digital__collapse_two"
                    >
                      How do you help manufacturers expand into the Middle East market?
                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_two"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_two"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        We assist manufacturers with market research, distributor partnerships, regulatory compliance, pricing strategies, and ongoing sales support to ensure successful market entry and sustained growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item td-faq-4-item wow fadeInUp"
                  data-wow-delay=".8s"
                  data-wow-duration="1s"
                >
                  <h2 className="accordion-header" id="digital_three">
                    <button
                      className="accordion-button collapsed td-faq-btn-2 td-faq-4-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_three"
                      aria-expanded="false"
                      aria-controls="digital__collapse_three"
                    >
                      Do you provide training and technical support for healthcare providers?
                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_three"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_three"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                      We are here to support you every step of the way. For technical support and installation, we connect directly with the manufacturers to ensure precise solutions and seamless assistance.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item td-faq-4-item wow fadeInUp"
                  data-wow-delay=".9s"
                  data-wow-duration="1s"
                >
                  <h2 className="accordion-header" id="digital_four">
                    <button
                      className="accordion-button collapsed td-faq-btn-2 td-faq-4-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_four"
                      aria-expanded="false"
                      aria-controls="digital__collapse_four"
                    >
                      What makes theREHApie Consultants different from other rehab consultants?

                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_four"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_four"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        Our deep market expertise, strong industry connections, and commitment to personalized support help us provide tailored solutions that bridge the gap between innovation and real-world patient care.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
