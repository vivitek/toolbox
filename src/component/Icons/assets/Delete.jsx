import React from "react"
import config from "../../../../vivi-tailwind-config.json"

const Delete = ({
  size = 24,
  color = config.colors.grayBlue.DEFAULT
}) => {
  return (
    <svg height={size} width={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="4">
        <path d="M39,16V42a4,4,0,0,1-4,4H13a4,4,0,0,1-4-4V16" fill="none" stroke={color}/>
        <line fill="none" stroke={color} x1="3" x2="45" y1="10" y2="10"/>
        <line fill="none" x1="30" x2="18" y1="23.971" y2="35.971"/>
        <line fill="none" x1="30" x2="18" y1="35.971" y2="23.971"/>
        <polyline fill="none" points="17 10 17 2 31 2 31 10" stroke={color}/>
      </g>
  </svg>
  )
}

export default Delete