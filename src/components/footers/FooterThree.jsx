import React from "react";
import { Link } from "react-router-dom";
import LOGO_WHITE from "../../assets/img/logo/logo1.jpg";

export const FooterThree = () => {
  return (
    <footer>
      <div className="td-footer-area td-black-bg-2 pt-120">
        <div className="td-footer-3-top pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-50">
                <div className="td-footer-3-logo">
                  <Link to="/">
                    <img src={LOGO_WHITE} alt="logo" width={200} />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 mb-50">
                <div className="td-footer-3-top-content">
                  <p>
                    Looking for collaboration? Send an email to
                    <a href="mailto:info@therehapie.com"> info@therehapie.com</a> for
                    valuable enquires and collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td-footer-3-wrap pb-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="td-footer-3-widget mt-45 mb-50">
                  <h2 className="td-footer-3-widget-big-title">
                    Let's work <span>together</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-xl-6 col-lg-5 col-md-6 col-sm-5 mb-40">
                    <div className="td-footer-3-widget">
                      <h2 className="td-footer-3-widget-title mb-20">Menu</h2>
                      <ul>
                        <li>

                          <a href="/blog">Blogs</a>
                          <a href="/service">Services</a>
                          <a href="/faq">FAQs</a>
                          <a href="/faq">About</a>
                          <a href="/contact">Contact Us</a>
                          <a href="/privacy">Privacy Policy</a>
                          <a href="/terms">Terms and Conditions</a>
                          <a href="/disclaimer">Disclaimer</a>
                          <a href="/cookies">Cookie Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7 col-md-6 col-sm-7 mb-40">
                    <div className="td-footer-3-widget mb-40">
                      <h2 className="td-footer-3-widget-title mb-20">
                        Contact Us
                      </h2>
                      <div className="td-footer-3-link">
                        <a href="mailto:info@therehapie.com">
                          info@therehapie.com
                        </a>
                        <a href="tel: +971 50 136 1586"> +971 50 136 1586</a>
                      </div>
                    </div>
                    <div className="td-footer-3-widget">
                      <h2 className="td-footer-3-widget-title mb-20">
                        Our Address
                      </h2>
                      <div className="td-footer-3-link">
                        <ul>
                          <li>
                            <a
                              // href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                              target="_blank"
                              className="td-footer-3-link"
                            >

                              DAFZ Head Office
                            </a>
                          </li>
                          <li>
                            <a
                              // href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                              target="_blank"
                              className="td-footer-3-link"
                            >
                              Building 9W, 1st Floor
                            </a>
                          </li>
                          <li>
                            <a
                              // href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                              target="_blank"
                              className="td-footer-3-link"
                            >
                              Dubai Airport Free Zone

                            </a>
                          </li>
                          <li>
                            <a
                              // href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                              target="_blank"
                              className="td-footer-3-link"
                            >

                              Dubai, United Arab Emirates

                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="td-footer-3-bottom-border td-footer-3-bottom-spacing">
                  <div className="row">
                    <div className="col-lg-6 mb-15">
                      <div className="td-footer-3-bottom-copyright">
                        <p>
                          © 2025 <a
                            href="https://www.tltechnologies.net/"
                            style={{ color: "red" }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            TL TECHNOLOGIES PRIVATE LIMITED
                          </a> All rights reserved.
                        </p>

                      </div>
                    </div>
                    <div className="col-lg-6 mb-15">
                      <div className="td-footer-3-bottom-social text-right">
                        <ul>
                          {/* <li>
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
                          </li> */}
                          <li>
                            <a
                              href="https://www.linkedin.com/in/abdul-rahiman-beyaram-kunhali-698a971b6/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <i className="fab fa-linkedin text-blue-600"></i>
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
