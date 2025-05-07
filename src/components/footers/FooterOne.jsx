import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/img/logo/logo1.jpg";

export const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="td-footer-area td-grey-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                <div className="td-footer-widget td-footer-col pt-120 pb-100">
                  <div className="td-footer-widget-content">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/portfolio">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-8 col-sm-8">
                <div className="td-footer-widget h-100 td-footer-col-2 pb-100 text-center pt-120">
                  <div className="td-footer-logo mb-45">
                    <img src={LOGO} alt="logo" />
                  </div>
                  <div className="td-footer-widget-content">
                    <p className="td-footer-widget-para mb-30">
                      Make your business boom
                      <br />
                      with our adina.
                    </p>
                    <div className="td-footer-btn">
                      <Link className="td-btn td-left-right" to="/contact">
                        Let's Chat
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
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="td-footer-widget td-footer-col-3 pt-120 pb-100">
                  <h4 className="td-footer-widget-title mb-40">Essntial</h4>
                  <div className="td-footer-widget-content-2">
                    <ul>
                      <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/terms-and-conditions">
                          Terms and conditions
                        </Link>
                      </li>
                      <li>
                        <Link to="/cookie-policy">Cookie Policy</Link>
                      </li>
                      {/* <li>
                        <Link to="/careers">Careers</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="td-footer-bottom pt-35 td-footer-bottom-border">
            <div className="container">
              <div className="row">
                <div className="col-xxl-6 col-xl-5 col-lg-4 col-md-4 mb-35">
                  <div className="td-footer-bottom-social">
                    <ul className="mb-45">
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-behance"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="td-footer-bottom-copyright">
                    <p>
                          © 2025 <a href="https://www.tltechnologies.net/" style={{color:"red"}}>TL TECHNOLOGIES PRIVATE LIMITED</a>, All rights reserved.
                        </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-8">
                  <div className="row">
                    <div className="col-lg-7 col-md-6">
                      <div className="td-footer-bottom-location pt-5 mb-35 ml-100">
                        <h5 className="td-footer-bottom-title mb-15">Canada</h5>
                        <a
                          href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                          target="_blank"
                        >
                          71 South Los Carneros Road,
                        </a>
                        <span>
                          Phone:
                          <a
                            className="td-footer-bottom-phone"
                            href="tel:+51174705812"
                          >
                             +971 50 136 1586
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <div className="td-footer-bottom-location mb-35 ml-20 pt-5">
                        <h5 className="td-footer-bottom-title mb-15">
                          Germany
                        </h5>
                        <a
                          href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                          target="_blank"
                        >
                          71 South Los Carneros Road,
                        </a>
                        <span>
                          Phone:
                          <a
                            className="td-footer-bottom-phone"
                            href="tel:+51174705812"
                          >
                            +51 174 705 812
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
