import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/img/icon/icon1-1.png";
import icon2 from "../../assets/img/icon/icon2-2.png";
import icon3 from "../../assets/img/icon/icon3-3.png";

export const ServiceAreaSix = ({ services }) => {
  const safeServices = Array.isArray(services) ? services : [];
console.log(services,"kjdhdfh")
  const icons = [icon1, icon2, icon3];

  return (
    <div className="td-service-area pt-140 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          {safeServices.map((service, index) => (
            <div
              key={service.id}
              className={`col-lg-6 ${index === 2 ? "mx-auto" : ""}`}
            >
              <div className="td-service-6-item mb-60">
                <div className="td-service-6-icon">
                  <span>
                    <img
                      src={icons[index] || icons[0]}
                      alt="icon"
                      width="70"
                      height="70"
                    />
                  </span>
                </div>
                <div className="td-service-6-content">
                  <h3 className="td-service-6-title mb-25">
<Link to={`/service-details/${service.title.toLowerCase().replace(/\s+/g, '')}`}>
  {service.title}
</Link>
                    
                  </h3>
                  <p>{service.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


