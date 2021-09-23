import React from "react"
import { classNames } from "../utils/classNames"

const Button = ({
  children,
  type = "text",
  onClick = () => {},
  className
}) => {
  return (
    <button
      type={type}
      onClick={() => onClick()}
      className={
        classNames(
          "text-white",
          "font-bold",
          "float-right",
          "bg-viviBlue",
          "py-1.5",
          "px-8",
          "rounded-full",
          "w-40",
          "h-12",
          "text-base",
          "uppercase",
          "focus:outline-none",
          "m-2",
          className,
        )
      }
    >{children}</button>
  )
}

export default Button