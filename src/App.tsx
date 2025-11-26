import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <div className="p-10 flex flex-col gap-4">
        <Button>Default Button</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  );
}

export default App;
