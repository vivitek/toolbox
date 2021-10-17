import React from 'react';
import config from "../../../../vivi-tailwind-config.json"

function Save({
  size = 24,
  color = config.colors.grayBlue.DEFAULT
}) {
    return (
      <svg height={size} width={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="4">
          <polyline fill="none" points="30 9 30 17 11 17 11 9"/>
          <polyline fill="none" points="11 39 11 28 37 28 37 39"/>
          <line fill="none" x1="24" x2="24" y1="9" y2="12"/>
          <path d="M40,44H8a4,4,0,0,1-4-4V8A4,4,0,0,1,8,4H35l9,9V40A4,4,0,0,1,40,44Z" fill="none" stroke={color}/>
        </g>
      </svg>
    );
};

export default Save;