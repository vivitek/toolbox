import React from 'react';
import config from "../../../../vivi-tailwind-config.json"

const Tick = ({
  size = 24,
  color = config.colors.grayBlue.DEFAULT
}) => {
    return (
      <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="6">
            <polyline fill="none" points="4 38 22 56 60 6" stroke={color}/>
        </g>
      </svg>
    );
};

export default Tick;