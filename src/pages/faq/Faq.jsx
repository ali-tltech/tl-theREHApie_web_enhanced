import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import thumbImg from "../../assets/img/faq/details/faq1-0.jpg";
import thumb2Img from "../../assets/img/faq/details/faq1-1.jpg";
import thumb3Img from "../../assets/img/faq/details/faq2-0.jpg";
import thumb4Img from "../../assets/img/faq/details/faq2-1.jpg";
import thumb5Img from "../../assets/img/faq/details/faq3-0.jpg";
import thumb6Img from "../../assets/img/faq/details/faq3-1.jpg";
import thumb7Img from "../../assets/img/faq/details/faq4-0.jpg";
import thumb8Img from "../../assets/img/faq/details/faq4-1.jpg";
import thumb9Img from "../../assets/img/faq/details/faq5-0.jpg";
import thumb10Img from "../../assets/img/faq/details/faq5-1.jpg";
import thumb11Img from "../../assets/img/faq/details/faq6-0.jpg";
import thumb12Img from "../../assets/img/faq/details/faq6-1.jpg";
import thumb13Img from "../../assets/img/faq/details/faq7-0.jpg";
import thumb14Img from "../../assets/img/faq/details/faq7-1.jpg";
import thumb15Img from "../../assets/img/faq/details/faq8-0.jpg";
import thumb16Img from "../../assets/img/faq/details/faq8-1.jpg";
import thumb17Img from "../../assets/img/faq/details/faq9-0.jpg";
import thumb18Img from "../../assets/img/faq/details/faq9-1.jpg";
import thumb19Img from "../../assets/img/faq/details/faq10-0.jpg";
import thumb20Img from "../../assets/img/faq/details/faq10-1.jpg";
import thumb21Img from "../../assets/img/faq/details/faq11-0.jpg";
import thumb22Img from "../../assets/img/faq/details/faq12-1.jpg";
import HelmetReuse from "../../components/seo/HelmetComponent";



export const Faq = () => {

    const faqItems = [
      {
        question: "How do  we reduce cost of manufactures?",
        images: [thumb21Img, thumb22Img],
        answer:
          "They don't have to hire a full time sales manager here,we do everything for them.",
      },
      {
        question: "How do you select the right distributors for manufacturers?",
        images: [thumbImg, thumb2Img],
        answer:
          "We evaluate potential distributors based on market reach, product expertise, sales performance, and regulatory compliance to ensure the best match for your product line.",
      },
      {
        question: "Do you assist with regulatory approvals and compliance?",
        images: [thumb3Img, thumb4Img],
        answer:
          "Yes, we help manufacturers navigate country-specific regulatory requirements, certifications, and legal approvals to ensure a smooth market entry.",
      },
      {
        question: "Can you help distributors optimize their product portfolio?",
        images: [thumb5Img, thumb6Img],
        answer:
          "Absolutely! We analyze market trends and customer demand to recommend the best rehabilitation products for your portfolio, ensuring profitability and competitive advantage.",
      },
      {
        question: "What kind of market research do you provide?",
        images: [thumb7Img, thumb8Img],
        answer:
          "We conduct in-depth market analysis, competitor benchmarking, pricing strategy formulation, and demand forecasting to help manufacturers and distributors make data-driven decisions.",
      },
      {
        question: "How do you support sales and distribution management?",
        images: [thumb9Img, thumb10Img],
        answer:
          "We work closely with manufacturers and distributors to develop sales strategies, monitor performance, and ensure distributors meet their targets through structured support.",
      },
      {
        question: "Do you offer localized product marketing and branding?",
        images: [thumb11Img, thumb12Img],
        answer:
          "Yes, we create targeted marketing strategies, including digital promotions, localized branding, and awareness campaigns to enhance product visibility.",
      },
      {
        question: "How do you help healthcare providers reduce costs?",
        images: [thumb13Img, thumb14Img],
        answer:
          "We offer bulk purchasing solutions, negotiate competitive pricing, and suggest cost-effective rehab equipment that meets medical standards without compromising quality.",
      },
      {
        question: "Do you provide after-sales support and maintenance?",
        images: [thumb15Img, thumb16Img],
        answer:
          "We don't provide directly,We coordinate with manufacturers and distributors to make sure that equipments are well taken care of.",
      },
      {
        question: "How do you assist with logistics and supply chain management?",
        images: [thumb17Img, thumb18Img],
        answer:
          "We help streamline procurement, warehousing, and inventory management to improve efficiency and reduce supply chain disruptions.",
      },
      {
        question: "What types of healthcare facilities do you work with?",
        images: [thumb19Img, thumb20Img],
        answer:
          "We collaborate with hospitals, rehabilitation centers, physiotherapy clinics, and specialty care units to enhance patient recovery outcomes.",
      },
      // {
      //   question: "Can you help launch new rehabilitation technologies in the Middle East?",
      //   images: [thumb21Img, thumb22Img],
      //   answer:
      //     "Yes! We develop go-to-market strategies, connect with key opinion leaders (KOLs), and establish brand awareness to successfully introduce new rehabilitation innovations.",
      // },
      // {
      //   question: "How do you support manufacturers in competitive pricing strategies?",
      //   images: [thumb23Img, thumb24Img],
      //   answer:
      //     "We analyze local market conditions, competitor pricing, and customer preferences to recommend optimal pricing strategies for different regions.",
      // },
      // {
      //   question: "Do you offer exclusive distribution agreements?",
      //   images: [thumb25Img, thumb26Img],
      //   answer:
      //     "Depending on the product and market needs, we facilitate negotiations for exclusive, non-exclusive, or hybrid distribution agreements to maximize market reach.",
      // },
      // {
      //   question: "What is the process for partnering with theREHApie Consultants?",
      //   images: [thumb27Img, thumb28Img],
      //   answer:
      //     "Simply reach out to us! We start with a consultation, evaluate your business needs, and customize a strategic plan for your expansion or procurement goals.",
      // },
      // {
      //   question: "Do you offer training and certification programs for rehab professionals?",
      //   images: [thumb29Img, thumb30Img],
      //   answer:
      //     "Yes, we provide hands-on training, workshops, and certification programs to help healthcare providers effectively use rehabilitation technologies.",
      // },
      // {
      //   question: "How can I get started with theREHApie Consultants?",
      //   images: [thumb31Img, thumb32Img],
      //   answer:
      //     "You can contact us via email, phone, or our website to discuss your requirements, and our team will guide you through the next steps.",
      // },
    ];

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
              <div
                className="accordion td-service-details-accordion"
                id="faqaccordion_image"
              >
                {faqItems.map((item, index) => (
                  <div
                    className="accordion-item td-service-details-accordion-item"
                    key={index}
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
                        <div className="row">
                          {item.images.map((img, imgIndex) => (
                            <div
                              className={`col-lg-6 col-md-6 col-sm-6`}
                              key={imgIndex}
                            >
                              <div className="td-faq-thumb mb-30">
                                <img
                                  className="w-100"
                                  src={img}
                                  alt={`faq-${imgIndex + 1}`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

                {/* links */}
                {/* <div className="td-service-widget-pdf mb-30">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa-sharp fa-solid fa-file-lines"></i>
                        Investments
                      </Link>
                      <span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-sharp fa-solid fa-file"></i>
                        Online Business
                      </Link>
                      <span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                    </li>
                  </ul>
                </div> */}

                {/* form */}
                <div className="td-service-widget-item mb-30">
                  <h3 className="td-service-widget-title td-service-widget-title-2">
                  Still have questions?
                  </h3>
                  {/* <form action="/contact"> */}
                    {/* <div className="td-service-widget-input mb-15">
                      <input type="text" id="name" placeholder="Your name" />
                      <label htmlFor="name">
                        <i className="fa-regular fa-user"></i>
                      </label>
                    </div>
                    <div className="td-service-widget-input mb-15">
                      <input
                        type="email"
                        id="email"
                        placeholder="Email address"
                      />
                      <label htmlFor="email">
                        <i className="fa-regular fa-envelope-open"></i>
                      </label>
                    </div>
                    <div className="td-service-widget-textarea mb-15">
                      <textarea id="textarea" placeholder="Message"></textarea>
                      <label htmlFor="textarea">
                        <i className="fa-sharp fa-light fa-pen"></i>
                      </label>
                    </div> */}
                    <div className="td-service-widget-form-btn">
                      <a href="/contact">
                      <button type="button"  className="td-btn td-left-right">
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
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
