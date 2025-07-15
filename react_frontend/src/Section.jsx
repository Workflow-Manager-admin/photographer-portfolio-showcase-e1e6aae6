import React from "react";
import "./Section.css";
import SectionActions from "./SectionActions";
import NavbarLinks from "./NavbarLinks";

/**
 * PUBLIC_INTERFACE
 * Section component - Matches Figma node 1:109/1:110 vertically-centered content panel,
 * with NavbarLinks above, true paddings, spacing, and Actions bar below children.
 *
 * @param {React.ReactNode} children - Any content passed into the Section (e.g., title, text, image, etc.)
 */
const Section = ({ children }) => (
  <div className="navbar-wrapper">
    {/* NavbarLinks (Figma "Navbar Links") always above */}
    <NavbarLinks />
    <section className="section-container">
      {/* Main Section content (centered, padded, stylable slot) */}
      {children}
      {/* Actions sub-section below content as per Figma */}
      <SectionActions />
    </section>
  </div>
);

export default Section;
