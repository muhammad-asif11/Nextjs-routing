import React from "react";

const Style: React.CSSProperties = {
  display: "flex",
  gap: ".5rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
};

const NotFound = () => {
  return (
    <div style={Style}>
      <h1>Page Not Found</h1>
      <p>Could not find resources</p>
    </div>
  );
};

export default NotFound;
