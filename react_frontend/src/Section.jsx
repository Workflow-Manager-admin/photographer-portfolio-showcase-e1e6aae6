import React from "react";
import "./Section.css";

/**
 * PUBLIC_INTERFACE
 * Section component - Matches Figma node 1:109/1:110 vertically-centered content panel,
 * with Figma paddings and two clear placeholder children ("1:110", "1:115").
 * When no real children are available, visually placeholders are shown and labeled.
 */
const Section = () => {
  return (
    <section className="Section" data-testid="figma-section">
      {/* TODO: Real Figma children go here when available */}
      <div style={{
        width: "100%",
        height: "50%",
        background: "#eee",
        marginBottom: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        Placeholder for Figma Child 1 ("1:110")
      </div>
      <div style={{
        width: "100%",
        height: "50%",
        background: "#ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        Placeholder for Figma Child 2 ("1:115")
      </div>
    </section>
  );
};

export default Section;
