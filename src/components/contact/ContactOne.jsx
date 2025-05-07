import React from "react";
import IMG_A from "../../assets/img/about/a.png";

export const ContactOne = () => {
  return (
    <div className="td-contact-area td-grey-bg pt-140 pb-110 z-index-1 p-relative">
      <img
        className="td-contact-shape d-none d-md-block"
        src={IMG_A}
        alt="transparent"
      />

      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 mb-30 wow fadeInRight"
            data-wow-delay=".4s"
            data-wow-duration="1s"
          >
            <div className="row">
              <div className="col-xxl-8 col-xl-12">
                <div className="td-contact-content-wrap mb-55">
                  <h2 className="td-contact-title">Get in touch</h2>
                  <p className="td-contact-pre">
                    Our focus is on delivering superior value to our
                    <br />
                    clients for company modification.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-7 col-md-6 col-sm-6 mb-25">
                    <div className="td-contact-info">
                      <h4 className="td-contact-info-title">Address:</h4>
                      <a
                        className="td-contact-info-link"
                        href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723"
                        target="_blank"
                        rel="noreferrer"
                      >
                        27 Division St. New York, NY 10002, USA
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-6 mb-25">
                    <div className="td-contact-info">
                      <h4 className="td-contact-info-title">Phone:</h4>
                      <a
                        className="td-contact-info-link"
                        href="tel:+1800123456789"
                      >
                        +1 800 123 456 789
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6 col-sm-6 mb-25">
                    <div className="td-contact-info">
                      <h4 className="td-contact-info-title">Email:</h4>
                      <a
                        className="td-contact-info-link"
                        href="mailto:adina@email.com"
                        target="_blank"
                      >
                        adina@email.com
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-6 mb-25">
                    <div className="td-contact-info">
                      <h4 className="td-contact-info-title">Social:</h4>
                      <div className="td-contact-social-info">
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div
              className="td-contact-form-wrap wow fadeInLeft"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <h3 className="td-contact-form-title mb-40">
                To make your novel ideas
                <br />
                into reality start with a <span>"Hello"</span>
              </h3>
              <div className="td-contact-form">
                <form action="#">
                  <input
                    className="mb-10"
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                  <input
                    className="mb-10"
                    type="email"
                    name="email"
                    placeholder="Your email"
                  />
                  <textarea
                    className="mb-30"
                    name="message"
                    placeholder="Massage"
                  ></textarea>
                  <button type="button">Send Messages</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
