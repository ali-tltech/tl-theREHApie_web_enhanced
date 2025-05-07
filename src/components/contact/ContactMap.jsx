import React from "react";

export const ContactMap = () => {
  return (
    <div id="map" className="td-map-area fix">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="td-contact-map-box p-relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.966237736861!2d55.368671274379295!3d25.263034329032863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d704984f6b3%3A0x1117940ba61441de!2sDAFZ%20Head%20Office%20-%20Building%209W!5e1!3m2!1sen!2sin!4v1742290427884!5m2!1sen!2sin"
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
