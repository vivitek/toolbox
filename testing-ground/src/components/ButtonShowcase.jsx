import { Button } from "@vivitek/toolbox"

const VARIANTS = [
  "orange",
  "green",
  "red",
  "blue",
  "pink",
]

const ShowcaseButton = () => {
  return (
    <div className=" w-full flex justify-center">
      <div className="px-8 my-4 flex">
        {VARIANTS.map((variant, idx) => (
          <div className="flex flex-col">
            <Button
              key={idx}
              variant={variant}
            >Click me !
            </Button>
            <Button
              key={idx}
              variant={variant}
              outlined
            >Click me !
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowcaseButton