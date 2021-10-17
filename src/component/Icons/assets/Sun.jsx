import React from "react"
import config from "../../../../vivi-tailwind-config.json"

const Sun = ({
  size = 24,
  color = config.colors.darkBlue.DEFAULT
}) => {
  return (
    <svg height={size} width={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="4">
        <line fill="none" x1="2" x2="6" y1="24" y2="24"/>
        <line fill="none" x1="8.444" x2="11.272" y1="8.444" y2="11.272"/>
        <line fill="none" x1="24" x2="24" y1="2" y2="6"/>
        <line fill="none" x1="39.556" x2="36.728" y1="8.444" y2="11.272"/>
        <line fill="none" x1="46" x2="42" y1="24" y2="24"/>
        <line fill="none" x1="39.556" x2="36.728" y1="39.556" y2="36.728"/>
        <line fill="none" x1="24" x2="24" y1="46" y2="42"/>
        <line fill="none" x1="8.444" x2="11.272" y1="39.556" y2="36.728"/>
        <circle cx="24" cy="24" fill="none" r="12" stroke={color}/>
      </g>
    </svg>
  )
}

export default Sun