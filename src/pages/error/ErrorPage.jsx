import React from "react";
import { Link } from "react-router-dom";
import { HeaderThree } from "../../components/headers/HeaderThree";
import errorImage from "../../assets/img/error/error.jpg";

export const ErrorPage = () => {
  return (
    <>
      <HeaderThree />

      <div
        className="td-error-area td-error-spacing fix bg-position d-flex align-items-center"
        style={{
          backgroundImage: `url(${errorImage})`,
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "start",
        }}
      >
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-8">
              <div className="">
                <h2 className="td-error-title mb-4" style={{ fontSize: "80px", fontWeight: "bold" }}>
                  404
                </h2>
                <h3 className="mb-4" style={{color:"white"}}>Oops! We couldn't find that page.</h3>
                <p className="mb-4">
                  It looks like the page you're searching for has been moved, renamed, or is temporarily unavailable.
                </p>

                <h5 className="mb-3" style={{color:"white"}}>Don’t worry, here’s what you can do:</h5>
                <ul className="list-unstyled text-start d-inline-block">
                  <li>✅ Double-check the URL you entered.</li>
                  <li>✅ Navigate back to our homepage to start fresh.</li>
                  <li>✅ Use the search bar to find what you’re looking for.</li>
                </ul>

                <p className="mt-4">
                  If you still need help, feel free to <Link to="/contact" className="text-primary">contact us</Link>.
                </p>

                <div className="td-error-btn mt-4">
                  <Link to="/" className="td-btn td-btn-7 td-left-right btn btn-light px-4 py-2 rounded">
                    Go to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
