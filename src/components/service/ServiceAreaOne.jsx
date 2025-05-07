import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import bg1 from "../../assets/img/service/bg.jpg";
import bg2 from "../../assets/img/service/bg2.jpg";
import bg3 from "../../assets/img/service/bg3.jpg";
import bg4 from "../../assets/img/service/bg4.jpg";
import bg5 from "../../assets/img/service/bg5.jpg";

const bgImages = [bg1, bg2, bg3, bg4, bg5];

const serviceItems = [
  {
    category: "Business",
    number: "01",
    title: "Investments",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/service-details",
    bgClass: "service-img-1",
  },
  {
    category: "Finance",
    number: "02",
    title: "Online Business",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/service-details",
    bgClass: "service-img-2",
  },
  {
    category: "Investment",
    number: "03",
    title: "Cryptocurrency",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/service-details",
    bgClass: "service-img-3",
  },
  {
    category: "Digital Marketing",
    number: "04",
    title: "Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/service-details",
    bgClass: "service-img-4",
  },
  {
    category: "Tax Advising",
    number: "05",
    title: "Business & Finance",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/service-details",
    bgClass: "service-img-5",
  },
];

export const ServiceAreaOne = () => {
  useEffect(() => {
    $(".service__item-8").on("mouseenter", function () {
      $(this).addClass("active").siblings().removeClass("active");
      $("#service-bg-img").removeClass().addClass($(this).attr("rel"));
    });
  }, []);

  return (
    <div className="td-service-area fix bg-position mb-130 p-relative">
      <div className="container-fluid g-0">
        {/* bg images */}
        <div className="service__slider-8">
          <div id="service-bg-img" className="service-img-2">
            {bgImages.map((bg, index) => (
              <div
                key={index}
                className={`service-bg service-img-${index + 1}`}
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
            ))}
          </div>
        </div>

        {/* service items */}
        <div className="row gx-0 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="col td-service-border service__item-8"
              rel={item.bgClass}
            >
              <div className="td-service-wrap p-relative">
                <span
                  className={`td-service-cetagory td-service-cetagory-${
                    index + 1
                  }`}
                >
                  {item.category}
                </span>
                <h2 className="td-service-number">{item.number}</h2>
                <div className="td-service-content">
                  <h4 className="td-service-title">
                    <Link to={item.link}>{item.title}</Link>
                  </h4>
                  <div className="td-service-content-inner">
                    <p className="td-service-content-para mb-45">
                      {item.description}
                    </p>
                    <div className="td-service-btn">
                      <Link
                        className="td-btn td-btn-2 td-left-right"
                        to={item.link}
                      >
                        Read More
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
          ))}
        </div>
      </div>
    </div>
  );
};
