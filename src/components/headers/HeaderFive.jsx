import React, { useEffect, useState } from "react";
import { useHeaderSticky } from "./useHeader";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import LOGO from "../../assets/img/logo/logo-small-new.png";
// import LOGOTWO from "../../assets/img/logo/logo.jpg";
import { NavImgGallery } from "./NavImgGallery";

export const HeaderFive = () => {
  useHeaderSticky();



  return (
    <>
      <header>
        <div className="td-header-5-area p-relative z-index-11">
          {/* top */}
          <div className="td-header-5-top d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-8">
                  <div className="td-header-5-info-wrap">
                    <ul>
                      <li className="borders">
                        <a href="mailto:info@therehapie.com" target="_blank" rel="noreferrer">
                          <i className="fa-regular fa-envelope-open"></i>
                          <div className="td-header-5-info">
                            <p>info@therehapie.com</p>
                            <span>Drop us a line</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="tel:+971501361586" target="_blank" rel="noreferrer">
                          <i className="fa-regular fa-phone-flip"></i>
                          <div className="td-header-5-info">
                            <p>+971 50 136 1586</p>
                            <span>Make a call</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 d-none d-lg-block">
                  <div className=" ml-40">
                    <a href="/">
                      <img src={LOGO} alt="logo" width={500} />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="td-header-5-btn text-right">
                    <Link
                      className="td-btn td-btn-3 td-left-right hide-between-1024-1430"
                      to="/contact"
                    >
                      Let's Talk
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
          </div>

          <div className="td-header-5-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="td-header-5-bg" id="header-sticky">
                    <div className="row align-items-center" style={{ justifyContent: 'center' }}>
                      <div className="col-lg-9 col-6" >
                        <div className="td-main-menu td-main-menu-2 td-main-menu-5 d-none d-lg-block">
                          <Navbar hidePortfolio />
                        </div>
                        <div className="td-header-5-logo ml-0 d-lg-none">
                          <a href="/">
                            <img src={LOGO} alt="logo" style={{ width: "100%", height: "auto" }} />
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-4 col-6">
                        <div className="td-header-5-right">
                          <div className="td-header-5-menubar d-lg-none">
                            <button className="td-menu-bar">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 6H0V0H6V6ZM15 0H9V6H15V0ZM24 0H18V6H24V0ZM6 9H0V15H6V9ZM15 9H9V15H15V9ZM24 9H18V15H24V9ZM6 18H0V24H6V18ZM15 18H9V24H15V18ZM24 18H18V24H24V18Z"
                                  fill="#20282D"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <NavImgGallery />
    </>
  );
};