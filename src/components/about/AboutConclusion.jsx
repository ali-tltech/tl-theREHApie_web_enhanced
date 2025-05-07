import React from "react";
import thumb from "../../assets/img/about/about5/thumb5.jpg";

const AboutConclusion = () => {
  return (
    <section
      className="container-fluid py-5 text-center position-relative d-flex align-items-center"
      style={{
        backgroundImage: `url(${thumb})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "50vh",
      }}
    >
      {/* Black overlay with opacity */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0, 0, 0, 0.6)" }}></div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-11 col-sm-12 text-white px-3">
            <h2 className="fw-bold text-white mb-3 td_conclusion_head">Join Us in Transforming Rehabilitation</h2>
            <p className="lead td_conclusion_content">
              At <span className="fw-semibold ">theREHApie Consultants</span>, we believe in empowering recovery, enabling success, 
              and shaping the future of rehabilitation. Whether you're a manufacturer, distributor, or healthcare provider, we 
              are here to help you make a lasting impact in the industry.
            </p>
            <div className="mt-4">
              <p className="mb-2">
                📩 <strong>Let’s Connect:</strong>{" "}
                <a href="mailto:info@therehapie.com" className="text-warning">
                  info@therehapie.com
                </a>
              </p>
              <p>
                🌐 <strong>Website:</strong>{" "}
                <a href="https://www.therehapie.com" className="text-warning" target="_blank" rel="noopener noreferrer">
                  www.therehapie.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConclusion;
