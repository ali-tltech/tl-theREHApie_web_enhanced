import React from "react";
import { Link } from "react-router-dom";

export const BlogItem = ({
  src,
  tag,
  href,
  title,
  description,
  userImage,
  author,
  date,
  // likes,
  // shares,
}) => {
  return (
    <article className="mb-60 p-3 border border-secondary rounded shadow-sm" style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
    <div className="td-postbox-thumb position-relative mb-3">
      <img className="w-100 rounded" src={src} alt="thumb" />
    </div>
    <div className="td-postbox-content">
      <h2 className="td-postbox-title mb-3">
        <Link to={href} className="text-decoration-none text-dark">
          {title}
        </Link>
      </h2>

      <div className="td-postbox-text mb-3">
        <p>{description}</p>
      </div>

      <div className="td-postbox-meta d-flex justify-content-between align-items-center">
        <div className="td-postbox-user d-flex align-items-center">
          <img src={userImage} alt="user" className="rounded-circle me-2" width="40" height="40" />
          <a href="#" className="text-decoration-none text-muted">
            By <span>{author}</span>
          </a>
        </div>

        <div className="td-postbox-meta-here">
          <span className="text-muted">
            <i className="fa-light fa-calendar-days me-1"></i>
            {date}
          </span>
        </div>
      </div>
    </div>
  </article>
  );
};
