import React from "react"
import config from "../../../../vivi-tailwind-config.json"

const Settings = ({
  size = 24,
  color = config.colors.grayBlue.DEFAULT
}) => {
  return (
    <svg height={size} width={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="3">
        <circle cx="24" cy="24" fill="none" r="7"/>
        <path d="M46,27V21L39.6,20.466a15.89,15.89,0,0,
          0-2.072-4.991l4.155-4.91L37.435,6.322l-4.91,4.155A15.876,
          15.876,0,0,0,27.534,8.4L27,2H21l-.534,6.4a15.89,15.89,0,0,
          0-4.991,2.072l-4.91-4.155L6.322,10.565l4.155,4.91A15.876,
          15.876,0,0,0,8.4,20.466L2,21v6l6.4.534a15.89,15.89,0,0,0,
          2.072,4.991l-4.155,4.91,4.243,4.243,4.91-4.155A15.876,15.876,
          0,0,0,20.466,39.6L21,46h6l.534-6.405a15.89,15.89,0,0,0,
          4.991-2.072l4.91,4.155,4.243-4.243-4.155-4.91A15.876,15.876,
          0,0,0,39.6,27.534Z" fill="none" stroke={color}/>
      </g>
    </svg>
  )
}

export default Settings