import React from "react";

function Hexagon({ width, className, fill = "", ...rest }) {
  return (
    <svg
      {...rest}
      viewBox="0 0 260 300"
      width={width}
      className={className}
      fill={fill}
    >
      <polygon
        className="polygon"
        points="130,300 260,225 260,75 130,0 0,75 0,225"
      />
    </svg>
  );
}

export default Hexagon;
