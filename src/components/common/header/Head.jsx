import React from "react";
import { ReactComponent as Logo } from "../../../assets/patterns/logo.svg"; // Adjust the path as needed

const Head = () => {
  const logoStyle = {
    width: "80px",  // Adjust width as needed
    height: "80px", // Adjust height as needed
    marginRight: "10px", // Spacing between logo and text
  };

  const headingStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <>
      <section className="head">
        <div className="pattern-top"></div>
        <div className="container flexSB">
          <div className="logo" style={headingStyle}>
            <Logo style={logoStyle} />
            <h1>SAHARO || સહારો</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
