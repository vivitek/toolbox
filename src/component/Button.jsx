import React from "react"
import { classNames } from "../utils/classNames"

const Button = ({
  children,
  type = "text",
  onClick = () => {},
  className = "",
  outline = null
}) => {
  return (
    <button
      type={type}
      onClick={() => onClick()}
      className={
        classNames(
          "text-white",
          "font-bold",
          "py-2",
          "px-6",
          "rounded-full",
          "text-base",
          "uppercase",
          "focus:outline-none",
          "m-2",
          outline ? classNames(
            "border-4",
            `border-${outline}`,
            `bg-white`,
            `text-${outline}`
          ) : "",
          className
        )
      }
    >{children}</button>
  )
}

export default Button