import React, { useEffect } from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import HelmetReuse from "../../components/seo/HelmetComponent";
import useFaqsStore from "../../store/useFaqsStore";

export const Faq = () => {

  const { faqs, loading, error, fetchFaqs } = useFaqsStore();
console.log(faqs);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const services = [
    { name: "Manufacturers", link: "/service-details/manufactures" },
    { name: "Distributors", link: "/service-details/distributors" },
    { name: "Healthcare Providers", link: "/service-details/healthcareproviders" },
  ];

  return (
    <Layout breadcrumbTitle={"FAQs"} breadcrumbSubtitle={"FAQs"}>
      <HelmetReuse 
        title="FAQs | theREHApie Consultants - Your Questions Answered" 
        description="Find answers to common questions about rehabilitation consulting, distributor sourcing, and business expansion in the Middle East."
        keywords="rehabilitation consulting FAQs, medical device consulting questions, business expansion help, Middle East healthcare consulting"
      />

      <div className="td-faq-area pt-140 pb-80">
        <div className="container">
          <div className="row">
            {/* accordion */}
            <div className="col-lg-8 mb-60">
              {loading && <div className="text-center py-5">Loading FAQs...</div>}
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  Failed to load FAQs. Please try again later.
                </div>
              )}
              
              {!loading && !error && (
                <div
                  className="accordion td-service-details-accordion"
                  id="faqaccordion_image"
                >
                  {faqs.map((item, index) => (
                    <div
                      className="accordion-item td-service-details-accordion-item"
                      key={item.id}
                    >
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className={`accordion-button ${
                            index !== 0 ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={`collapse${index}`}
                        >
                          {item.question}
                          <span className="accordion-btn"></span>
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#faqaccordion_image"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="col-lg-4 mb-20">
              <div className="td-service-details-right ml-50">
                {/* our services */}
                <div className="td-service-widget-item mb-30">
                  <h3 className="td-service-widget-title">Our Services</h3>
                  <ul>
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link to={service.link}>
                          {service.name}
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* form */}
                <div className="td-service-widget-item mb-30">
                  <h3 className="td-service-widget-title td-service-widget-title-2">
                    Still have questions?
                  </h3>
                  <div className="td-service-widget-form-btn">
                    <a href="/contact">
                      <button type="button" className="td-btn td-left-right">
                        Contact us 
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
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};