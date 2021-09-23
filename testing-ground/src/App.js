import { ExampleComponent, Button } from "@vivitek/toolbox"

function App() {
  return (
    <div className="bg-white h-full w-full text-center text-white">
      <ExampleComponent text={'Test application'} />
      <Button>Foo</Button>
      <Button className="bg-grayBlue">Bar</Button>
      <Button className="bg-viviGreen">Baz</Button>
      <Button className="bg-viviRed">Dev</Button>
    </div>
  );
}

export default App;
