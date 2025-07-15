import React from "react";
import "./NavbarLinks.css";

/**
 * PUBLIC_INTERFACE
 * NavbarLinks - A horizontal flex navbar matching the specified Figma frame properties.
 * 
 * Four placeholder link elements: "Link 1" to "Link 4".
 * 
 * Width: 162px; Height: 10px; Gap between items: 10px. 
 * No background.
 *
 * TODO: Replace placeholder labels and/or styles with actual link text and styling when Figma/text details become available.
 */
const NavbarLinks = () => (
  <nav className="navbar-links">
    {/* TODO: Update these link labels and styles when real link info is available */}
    <a href="#" className="navbar-link">Link 1</a>
    <a href="#" className="navbar-link">Link 2</a>
    <a href="#" className="navbar-link">Link 3</a>
    <a href="#" className="navbar-link">Link 4</a>
  </nav>
);

export default NavbarLinks;
