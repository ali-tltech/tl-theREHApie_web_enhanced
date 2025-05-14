import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/img/footer/bg.jpg";
import useSocialStore from "../../store/useSocialStore";
import useOrganizationStore from "../../store/useOrganizationDetailsStore";

export const FooterFive = () => {
  const { socials, loading, error, fetchSocials } = useSocialStore();

  const {
    organizationDetails,
    loading: orgLoading,
    error: orgError,
    fetchOrganizationDetails
  } = useOrganizationStore();

  // Format platform name with first letter capitalized
  const formatPlatformName = (platform) => {
    if (!platform) return '';
    return platform.charAt(0).toUpperCase() + platform.slice(1).toLowerCase();
  };

  useEffect(() => {
    fetchSocials();
    fetchOrganizationDetails();
  }, [fetchSocials, fetchOrganizationDetails]);

  // Get organization contact details
  const email = organizationDetails?.email || "info@therehapie.com";
  const phone = organizationDetails?.phone || "+971 50 136 1586";
  const address = organizationDetails?.address
   || {
    line1: "DAFZ Head Office",
    line2: "Building 9W, 1st Floor",
    line3: "Dubai Airport Free Zone",
    line4: "Dubai, United Arab Emirates"
  };

  // copyright Data
  const companyName = " TL TECHNOLOGIES PRIVATE LIMITED";
  const companyWebsite = "https://www.tltechnologies.net/";
  // const currentYear = new Date().getFullYear();
  const currentYear = "2025"

  return (
    <footer>
      <div className="td-footer-area">
        <div className="td-footer-5-top td-black-bg-2 td-footer-5-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45">
                  <h2 className="td-footer-5-widget-title mb-45">
                    Head Office
                  </h2>
                  <div className="td-footer-5-widget-content">
                    <ul>
                      <li>
                        <a href={`mailto:${email}`}>
                          {email}
                        </a>
                      </li>
                      <li className="mb-20">
                        <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                      </li>
                      {orgLoading ? (
                        <li>Loading address information...</li>
                      ) : orgError ? (
                        <li>Error loading address information</li>
                      ) : (
                        <>
                          <li>
                            <a target="_blank" className="td-footer-3-link">
                              {address.line1 }
                            </a>
                          </li>
                          <li>
                            <a target="_blank" className="td-footer-3-link">
                              {address.line2 }
                            </a>
                          </li>
                          <li>
                            <a target="_blank" className="td-footer-3-link">
                              {address.line3 }
                            </a>
                          </li>
                          <li>
                            <a target="_blank" className="td-footer-3-link">
                              {address.line4 }
                            </a>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45 ml-40">
                  <h2 className="td-footer-5-widget-title mb-45">Our Pages</h2>
                  <div className="td-footer-5-widget-content td-footer-5-widget-content-link">
                    <ul>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <a href="/faq">FAQs</a>
                      </li>
                      <li>
                        <a href="/blog">Blogs</a>
                      </li>
                      <li>
                        <a href="/service">Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45 ml-50">
                  <h2 className="td-footer-5-widget-title mb-45">Link Pages</h2>
                  <div className="td-footer-5-widget-content td-footer-5-widget-content-link">
                    <ul>
                      <li>
                        <a href="/terms">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="/privacy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/disclaimer">Disclaimer</a>
                      </li>
                      <li>
                        <a href="/cookies">Cookie Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45 ml-65">
                  <h2 className="td-footer-5-widget-title mb-45">Follow Us</h2>
                  <div className="td-footer-5-widget-content td-footer-5-widget-content-link text-white">
                    <ul>
                      {loading ? (
                        <li>Loading social links...</li>
                      ) : error ? (
                        <li>Error loading social links</li>
                      ) : socials && socials.length > 0 ? (
                        socials.map((social, index) => (
                          <li key={social._id || index}>
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ cursor: 'pointer' }}
                            >
                              {formatPlatformName(social.platform)}
                            </a>
                          </li>
                        ))
                      ) : (
                        <li>No social media available</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div
          className="td-footer-5-bottom bg-position"
          style={{ backgroundImage: `url(${footerBg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="td-footer-5-bottom-content text-center">
                  <p>
                    © {currentYear}{" "}
                    <a
                      href={companyWebsite}
                      style={{ color: "red" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    {companyName}
                    </a>{" "}
                    All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};