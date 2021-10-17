import React from 'react';
import config from "../../../../vivi-tailwind-config.json"

const Add = ({
  size = 24,
  color = config.colors.grayBlue.DEFAULT
}) => {
    return (
      <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="6">
          <line fill="none" stroke={color} x1="32" x2="32" y1="5" y2="59"/>
          <line fill="none" stroke={color} x1="59" x2="5" y1="32" y2="32"/>
        </g>
      </svg>
    );
};

export default Add;