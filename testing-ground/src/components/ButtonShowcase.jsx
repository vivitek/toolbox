import { useState } from "react"
import { Button } from "@vivitek/toolbox"

const COLORS = [
  "darkBlue",
  "grayBlue",
  "viviBlue",
  "viviRed",
  "viviGreen",
  "viviYellOrange",
  "viviPinple"
]

const ShowcaseButton = () => {
  const [color, setColor] = useState(COLORS[0])
  return (
    <div className="flex overflow-none">
      <div className="px-8 flex flex-col self-center border-r">
        {COLORS.map((_color, idx) => (
          <Button
            key={idx}
            className={`bg-${_color} text-white`}
            onClick={() => setColor(_color)}
          >{_color}</Button>
        ))}
      </div>
      <div className="self-center pl-8 overflow-x-auto">
        <div className="whitespace-nowrap my-8">
          <Button className={`bg-${color}`}>Click me !</Button>
          <Button className={`bg-${color}-900`}>Click me !</Button>
          <Button className={`bg-${color}-800`}>Click me !</Button>
          <Button className={`bg-${color}-700`}>Click me !</Button>
          <Button className={`bg-${color}-600`}>Click me !</Button>
          <Button className={`bg-${color}-500`}>Click me !</Button>
          <Button className={`bg-${color}-400`}>Click me !</Button>
          <Button className={`bg-${color}-300`}>Click me !</Button>
          <Button className={`bg-${color}-200`}>Click me !</Button>
          <Button className={`bg-${color}-100`}>Click me !</Button>
        </div>
        <div className="whitespace-nowrap">
          <Button outline={`${color}`}>Click me !</Button>
          <Button outline={`${color}-900`}>Click me !</Button>
          <Button outline={`${color}-800`}>Click me !</Button>
          <Button outline={`${color}-700`}>Click me !</Button>
          <Button outline={`${color}-600`}>Click me !</Button>
          <Button outline={`${color}-500`}>Click me !</Button>
          <Button outline={`${color}-400`}>Click me !</Button>
          <Button outline={`${color}-300`}>Click me !</Button>
          <Button outline={`${color}-200`}>Click me !</Button>
          <Button outline={`${color}-100`}>Click me !</Button>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseButton