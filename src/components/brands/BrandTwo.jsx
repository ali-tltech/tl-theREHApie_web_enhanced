import React from "react";
import mapImg from "../../assets/img/map/bg-map.png";
import BAHRAIN from "../../assets/img/map/BAHRAIN.jpg";
import UAE from "../../assets/img/map/UAE.jpg";
import EGYPT from "../../assets/img/map/EGYPT.jpg";
import QATAR from "../../assets/img/map/QATAR.jpg";
import OMAN from "../../assets/img/map/OMAN.jpg";
import KUWAIT from "../../assets/img/map/KUWAIT.jpg";
import SOUDIARABIA from "../../assets/img/map/SOUDI ARABIA.jpg";
import TURKEY from "../../assets/img/map/Turkey.jpg";

const brands = [
  { src: UAE, cols: "6" },
  { src: BAHRAIN, cols: "6" },
  { src: OMAN, cols: "3" },
  { src: KUWAIT, cols: "3" },
  { src: QATAR, cols: "3" },
  { src: EGYPT, cols: "3" },
  { src: TURKEY, cols: "3" },
  { src: SOUDIARABIA, cols: "3" },
];

export const BrandTwo = () => {
  return (
    <div className="td-brand-area fix pt-135 pb-160">
      <div className="container">
        <div className="row gx-0 wow slideInDown">
          <div className="col-lg-6">
            <div className="td-brand-title-wrap p-relative">
              <span className="td-section-title-pre mb-10">Our Trusted Partners</span>
              <h2 className="td-section-title mb-30">All around <br /> the world</h2>
              <img className="td-brand-map d-none d-lg-block" src={mapImg} alt="map" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row gx-0">
              {brands.slice(0, 2).map((brand, index) => (
                <div key={index} className={`col-lg-${brand.cols} col-md-6 col-sm-6 `}>
                  <div className="td-brand-logo-wrap-2 td-brand-logo-border p-relative  text-center">
                    <a >
                      <img className="td-brand-logo-2 " src={brand.src} alt="brand" height={250} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row gx-0">
              {brands.slice(2).map((brand, index) => (
                <div key={index} className={`col-lg-${brand.cols} col-md-6 col-sm-6 `}>
                  <div className="td-brand-logo-wrap-2 td-brand-logo-border p-relative text-center ">
                    <a >
                      <img className="td-brand-logo-2 " src={brand.src} alt="brand" height={250} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
