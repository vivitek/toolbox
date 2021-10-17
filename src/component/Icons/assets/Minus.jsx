import React from 'react';
import config from "../../../../vivi-tailwind-config.json"

function Minus({
  size = 24,
  color = config.colors.grayBlue.DEFAULT
}) {
    return (
      <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="7">
          <line fill="none" stroke={color} x1="46" x2="18" y1="32" y2="32"/>
        </g>
    </svg>
    );
};

export default Minus;