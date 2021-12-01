
import React from 'react';
import config from "../../../../vivi-tailwind-config.json"

function Next({
  size = 24,
  color = config.colors.grayBlue.DEFAULT
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" fill={color} stroke={color}/>
    </svg>
  )
}

export default Next;