import React from "react"
import config from "../../../../vivi-tailwind-config.json"

const Moon = ({
  size = 24,
  color = config.colors.grayBlue.DEFAULT
}) => {
  return (
    <svg height={size} width={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="4">
        <path d="M38,30c-11,0-20-9-20-20 c0-1.8,
        0.3-3.6,0.7-5.3C10.2,7,4,14.8,4,24c0,11,9,
        20,20,20c9.2,0,17-6.2,19.3-14.7C41.6,29.7,
        39.8,30,38,30z" fill="none" stroke={color}/>
      </g>
    </svg>
  )
}

export default Moon