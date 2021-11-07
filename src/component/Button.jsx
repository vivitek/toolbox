import React from "react"
import { classNames } from "../utils/classNames"

const Button = ({
  children,
  variant = "orange",
  type = "text",
  onClick = () => {},
  outlined = false
}) => {

  const getVariantStyle = () => {
    const COMMON = [
      'px-6',
      'py-2',
      'rounded-full',
      'transition',
      'duration-200',
      'each-in-out'
    ]

    let classes
    if (outlined) {
      switch (variant) {
        case 'green': classes = 'border-2 border-viviGreen hover:border-viviGreen-500';  break;
        case 'red':   classes = 'border-2 border-viviRed hover:border-viviRed-500';      break;
        case 'blue':  classes = 'border-2 border-viviBlue hover:border-viviBlue-500';    break;
        case 'pink':  classes = 'border-2 border-viviPinple hover:border-viviPinple-500';    break;
        case 'orange':
        default:
          classes = 'border-2 border-viviYellOrange hover:border-blue-600'
      }
      return classNames(
        ...COMMON,
        classes,
      )

    }
    switch (variant) {
      case 'green': classes = 'bg-viviGreen hover:bg-viviGreen-500';  break;
      case 'red':   classes = 'bg-viviRed hover:bg-viviRed-500';      break;
      case 'blue':  classes = 'bg-viviBlue hover:bg-viviBlue-500';    break;
      case 'pink': classes = 'bg-viviPinple hover:bg-viviPinple-500'; break;
      case 'orange':
      default:
        classes = 'bg-viviYellOrange hover:bg-blue-600'
    }
    return classNames(
      ...COMMON,
      classes,
      'text-white',
    )
  }

  return (
    <button
      type={type}
      onClick={() => onClick()}
      className={
        classNames(
          "text-white",
          "font-bold",
          "font-sans",
          "py-2",
          "px-6",
          "rounded-full",
          "text-sm",
          "uppercase",
          "focus:outline-none",
          "m-2",
          getVariantStyle(),
        )
      }
    >{children}</button>
  )
}

export default Button
