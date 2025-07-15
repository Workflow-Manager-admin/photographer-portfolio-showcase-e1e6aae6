import React from "react";
import "./Section.css";

/**
 * PUBLIC_INTERFACE
 * SectionActions - Renders Figma style Actions button bar (frame 1:115) with proper spacing and size.
 * - Flex row, gap: 8px, width: 60px, height: 43px, padding-top: 24px
 * Replace button labels/icons as required.
 */
const SectionActions = () => (
  <div className="section-actions">
    <button className="action-btn">Contact us</button>
  </div>
);

export default SectionActions;
