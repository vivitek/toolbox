import { Spinner } from "@vivitek/toolbox";
import ShowcaseButton from "./components/ButtonShowcase";
import config from "@vivitek/toolbox/vivi-tailwind-config.json"

function App() {
  return (
    <div className="h-full w-full text-center text-white bg-darkBlue">
      <ShowcaseButton />
      <div className="py-8 flex flex-col">
        <h1 className="text-2xl">Spinners</h1>
        <div className="flex justify-around">
          <Spinner size={128} />
          <Spinner size={128} color={config.colors.viviBlue.DEFAULT} />
          <Spinner size={128} color={config.colors.viviRed.DEFAULT} />
          <Spinner size={128} color={config.colors.viviGreen.DEFAULT} />
          <Spinner size={128} color={config.colors.viviYellOrange.DEFAULT} />
          <Spinner size={128} color={config.colors.viviPinple.DEFAULT} />
        </div>
      </div>
    </div>
  );
}

export default App;
