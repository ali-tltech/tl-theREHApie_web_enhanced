import React, { useEffect } from "react";
import bgImage from "../../assets/img/faq/home4/faq-bg.jpg";
import useFaqsStore from "../../store/useFaqsStore"; // Adjust the import path as needed

export const FaqTwo = () => {
  const { homeFaqs, homeLoading, homeError, fetchHomeFaqs } = useFaqsStore();

  useEffect(() => {
    fetchHomeFaqs();
  }, [fetchHomeFaqs]);

  if (homeLoading) {
    return (
      <div className="td-faq-area bg-position pt-140 pb-110" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="text-center">
                <p>Loading FAQs...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (homeError) {
    return (
      <div className="td-faq-area bg-position pt-140 pb-110" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="text-center">
                <p>Error loading FAQs: {homeError}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                {homeFaqs.map((faq, index) => (
                  <div
                    key={faq.id || index}
                    className={`accordion-item td-faq-4-item wow fadeInUp ${index === 0 ? 'td-faq-active' : ''}`}
                    data-wow-delay={`.${4 + index * 2}s`}
                    data-wow-duration="1s"
                  >
                    <h2 className="accordion-header" id={`digital_${index + 1}`}>
                      <button
                        className={`accordion-button td-faq-btn-2 td-faq-4-btn ${index !== 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#digital__collapse_${index + 1}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`digital__collapse_${index + 1}`}
                      >
                        {faq.question}
                        <span className="accordion-btn">
                          <b className="td-btn-group p-relative">
                            <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                            <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                          </b>
                        </span>
                      </button>
                    </h2>
                    <div
                      id={`digital__collapse_${index + 1}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      aria-labelledby={`digital_${index + 1}`}
                      data-bs-parent="#return_faqaccordion"
                    >
                      <div className="accordion-body td-faq-para">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};