import React from "react"
import config from "../../../../vivi-tailwind-config.json"

const Hamburger = ({
  size = 24,
  color = config.colors.grayBlue.DEFAULT
}) => {
  return (
    <svg height={size} width={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="6">
        <line fill="none" x1="2" x2="46" y1="24" y2="24"/>
        <line fill="none" stroke={color} x1="2" x2="46" y1="10" y2="10"/>
        <line fill="none" stroke={color} x1="2" x2="46" y1="38" y2="38"/>
      </g>
    </svg>
  )
}

export default Hamburger
