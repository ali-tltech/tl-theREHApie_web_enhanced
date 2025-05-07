import React from "react";

export const ServiceSidebar = ({ serviceData }) => {

  return (
    <>
      <div className="td-service-details-right ml-50">
        {/* our services */}
        <div className="td-service-widget-item mb-30">
          <h3 className="td-service-widget-title">Other Services</h3>
          <ul>
            {serviceData?.map((value) => (
              <li key={value}>
                <a href={`/service-details/${value.toLowerCase().replace(/\s+/g, '')}`}>
                  {value}
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </>
  );
};
