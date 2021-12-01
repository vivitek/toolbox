
import React from 'react';
import config from "../../../../vivi-tailwind-config.json"

function Prev({
  size = 24,
  color = config.colors.grayBlue.DEFAULT
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"  fill={color} stroke={color} />
    </svg>
  )
}

export default Prev;