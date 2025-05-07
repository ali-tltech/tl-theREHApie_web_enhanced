import React from "react";
import { ServiceNavigation } from "../components/service/ServiceNavigation";
import { ServiceSidebar } from "../components/service/ServiceSidebar";

export const ServiceLayout = ({ children,serviceData }) => {
  return (
    <div className="td-seervice-details-area pt-140">
      <div className="container">
        <div className="row">
          {/* left */}
          <div className="col-lg-8 mb-60">{children}</div>

          {/* sidebar */}
          <div className="col-lg-4">
            <ServiceSidebar serviceData={serviceData} />
          </div>
        </div>

        {/*  navigation */}
        {/* <ServiceNavigation /> */}
      </div>
    </div>
  );
};
