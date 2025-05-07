import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ hidePortfolio = false }) => {
  return (
    <nav className="td-main-menu-content  " style={{textAlign:"start",width:"100%"}}>
      <ul className="" style={{marginLeft:"10px",width:"100%",display:"block",justifyContent:"center"}}>
        <li className="" >
          <Link to="/"> Home</Link>
        </li>
        <li className="">
          <Link to="/about"> About</Link>
        </li>

          <li>
              <Link to="/blog">Blogs</Link>
            </li>

        <li className="">
          <Link to="/service"> Services</Link>
          
        </li>
        <li className="">
          <Link to="/faq"> FAQs</Link>
          
        </li>

        {hidePortfolio ? null : (
          <li className="">
            <Link to="/portfolio">Portfolio</Link>
            <ul className="td-submenu submenu">
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/portfolio-details">Portfolio Details</Link>
              </li>
            </ul>
          </li>
        )}

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
