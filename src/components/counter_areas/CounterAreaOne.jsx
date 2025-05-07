import React from "react";
import IMG from "../../assets/img/counter/map.png";
import IMG2 from "../../assets/img/counter/bg.jpg";
import { Link } from "react-router-dom";

export const CounterAreaOne = () => {
  return (
    <div className="td-counter-area fix p-relative">
      <img className="td-counter-map" src={IMG} alt="map" />
      <div className="container-fluid g-0">
        <div className="row gx-0">
          <div className="col-xl-4 col-lg-6">
            <div className="td-counter-thumb p-relative">
              <img className="w-100" src={IMG2} alt="thumb" />
              <div className="td-counter-logo d-none d-sm-block td-pulse-border">
                <h3>E.</h3>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 mb-40">
            <div className="td-counter-content ml-110 mr-150">
              <p className="mb-45">
                Our focus is on delivering superior value to our clients for
                company modification. Providing sustainable
                <span>strategies</span> that will upgrade their business. From
                strategy to delivery, we are here to make sure your
                <span>business</span> succeeds. Thinking, writing and planning
                with brand for more than <span>50 years.</span>
              </p>
              <p className="mb-35">
                We are constantly rethinking the future by creating the next
                generation of products, brands and services from a hybrid
                perspective. The <span>unthinkable</span> today becomes
                inevitable.
              </p>

              <div className="td-counter-btn">
                <Link className="td-btn td-btn-3 td-left-right" to="/contact">
                  Get In Touch
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

          <div className="col-xl-3 col-lg-6 mb-40">
            <div className="td-counter-count-wrap">
              <div className="td-counter-single td-counter-single-border mb-35">
                <h2 className="td-counter-count">
                  <span
                    data-purecounter-duration="1"
                    data-purecounter-end="95"
                    className="purecounter"
                  >
                    0
                  </span>
                  %
                </h2>
                <span className="td-counter-count-para">
                  Clients Satisfied and <br />
                  Repeating
                </span>
              </div>

              <div className="td-counter-single">
                <h2 className="td-counter-count">
                  <span
                    data-purecounter-duration="1"
                    data-purecounter-end="125"
                    className="purecounter"
                  >
                    0
                  </span>
                  k
                </h2>
                <span className="td-counter-count-para">Projects Done</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
