import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);

  // Inline styles for the button
  const buttonStyle = {
    backgroundColor: "#f49366",
    border: "none",
    borderRadius: "50px",
    padding: "20px 25px",
    cursor: "pointer",
    fontSize: "16px",
    color: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
    outline: "none",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    transform: "scale(1.1)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
  };

  // Inline styles for links
  const linkStyle = {
    textDecoration: "none", // Remove underline
    fontSize: "18px", // Change font size
    fontFamily: "Arial, sans-serif", // Change font style
    color: "#fff", // Change link color
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/" style={linkStyle}>Home</Link>
            </li>
            <li>
              <Link to="/courses" style={linkStyle}>Courses</Link>
            </li>
            <li>
              <Link to="/assessment" style={linkStyle}>Assessment</Link>
            </li>
            <li>
              <Link to="/contact" style={linkStyle}>Contact</Link>
            </li>
          </ul>
          <button
            className="toggle"
            onClick={() => setClick(!click)}
            style={click ? buttonHoverStyle : buttonStyle}
          >
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
