import { alert, Spinner, Button } from "@vivitek/toolbox";
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
      <div className="py-8 flex flex-col">
        <h1 className="text-2xl">Alerts</h1>
        <div className="flex justify-around">
          <Button
            className="bg-viviGreen"
            onClick={() => alert({type: "success", text: "Awesome text !"})}>Success</Button>
          <Button
            className="bg-viviBlue"
            onClick={() => alert({type: "info", text: "Awesome text !"})}>Info</Button>
          <Button
            className="bg-viviYellOrange"
            onClick={() => alert({type: "warning", text: "Awesome text !"})}>Warning</Button>
          <Button
            className="bg-viviRed"
            onClick={() => alert({type: "error", text: "Awesome text !"})}>Error</Button>
          <Button
            className="bg-viviPinple"
            onClick={() => alert({type: "question", text: "Awesome text !",})}>Question</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
