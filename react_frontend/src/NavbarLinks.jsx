import React from "react";
import "./Section.css";

/**
 * PUBLIC_INTERFACE
 * NavbarLinks for use above Section, Figma-based
 * Shows: Projects | Portraits | Fashion | Fine Art
 */
const NavbarLinks = () => (
  <nav className="navbar-links">
    <a href="#" className="navbar-link">Projects</a>
    <a href="#" className="navbar-link">Portraits</a>
    <a href="#" className="navbar-link">Fashion</a>
    <a href="#" className="navbar-link">Fine Art</a>
  </nav>
);

export default NavbarLinks;
