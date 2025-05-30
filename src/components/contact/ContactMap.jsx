import React from "react";

export const ContactMap = ({mapUrl}) => {
  
  return (
    <div id="map" className="td-map-area fix">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="td-contact-map-box p-relative">
              <iframe
                src={mapUrl}
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* <div className="td-contact-map-logo">
                <h3>theRehapie</h3>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
