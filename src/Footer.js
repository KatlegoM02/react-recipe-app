import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      This project is coded by{" "}
      <a
        href="https://github.com/KatlegoM02"
        target="_blank"
        rel="noopener noreferrer"
      >
        Katlego Makgatle
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/KatlegoM02/react-recipe-finder"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://react-recipe-finder.onrender.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        hosted on Render
      </a>
    </footer>
  );
};

export default Footer;
