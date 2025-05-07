import React from "react";
import { BlogSidebar } from "../components/blogs/BlogSidebar";

export const BlogLayout = ({ children }) => {
  return (
    <>
      <div className="td-postbox-area pt-140 pb-100">
        <div className="container">
          <div className="row">
            <div className=" mb-40">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
