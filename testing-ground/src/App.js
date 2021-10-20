import {
  alert,
  Spinner,
  Button,
  Modal,
  Close,
  Add,
  Minus,
  Save,
  Delete,
  Tick,
  Hamburger,
  Settings,
  Sun,
  Moon,
  Table
} from "@vivitek/toolbox";
import ShowcaseButton from "./components/ButtonShowcase";
import config from "@vivitek/toolbox/vivi-tailwind-config.json"
import { useState } from "react";

function App() {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="h-full w-full text-center text-white bg-grayBlue overflow-y-scroll flex items-center flex-col">
      <ShowcaseButton />
      <div className="py-8 flex flex-col w-full">
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
      <div className="py-8 flex flex-col w-full">
        <h1 className="text-2xl">Alerts</h1>
        <div className="flex justify-around">
          <Button
            className="bg-viviGreen"
            onClick={() => alert({ type: "success", text: "Awesome text !" })}>Success</Button>
          <Button
            className="bg-viviBlue"
            onClick={() => alert({ type: "info", text: "Awesome text !" })}>Info</Button>
          <Button
            className="bg-viviYellOrange"
            onClick={() => alert({ type: "warning", text: "Awesome text !" })}>Warning</Button>
          <Button
            className="bg-viviRed"
            onClick={() => alert({ type: "error", text: "Awesome text !" })}>Error</Button>
          <Button
            className="bg-viviPinple"
            onClick={() => alert({ type: "question", text: "Awesome text !", })}>Question</Button>
        </div>
      </div>
      <div className="py-8 flex flex-col items-center">
        <h1 className="text-2xl">Modals</h1>
        <div className="flex px-8">
          <Button
            className="bg-viviBlue max-w-8"
            onClick={() => setModalOpened(old => !old)}
          >Open modal</Button>
          <Modal
            open={modalOpened}
            onBackdropClick={() => setModalOpened(false)}
            onClose={() => setModalOpened(false)}
          >
            <div className="text-black">
              <h1 className="text-2xl bold mb-8">Modal title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur et ultrices mi. Fusce imperdiet eu nibh non accumsan.
                Vestibulum scelerisque volutpat hendrerit. Nullam at mauris mauris.
              </p>
            </div>
          </Modal>
        </div>
      </div>
      <div className="py-8 flex flex-col items-center w-1/2">
        <h1 className="text-2xl">Icons</h1>
        <div className="flex justify-around w-full flexwrap">
          <Close color="white" />
          <Add color="white" />
          <Minus color="white" />
          <Save color="white" />
          <Delete color="white" />
          <Tick color="white" />
          <Hamburger color="white" />
          <Settings color="white" />
          <Sun color="white" />
          <Moon color="white" />
        </div>
      </div>
      <div className="py-8 flex flex-col items-center w-2/3">
        <h1 className="text-2xl">Table</h1>
        <Table
          className="h-96"
          itemsPerPage={5}
          headers={[
            { name: "foo", cellClassName: "", headerClassName: " bg-darkBlue-400"},
            { name: "bar", cellClassName: "h-full flex justify-evenly", headerClassName: "text-center bg-darkBlue-400"},
          ]}
          data={[
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
            { foo: "00:1A:C2:7B:00:47", bar: (<div className="flex w-1/2 justify-around"><Tick color="#fff"/> <Close color="#fff" /></div>) },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
