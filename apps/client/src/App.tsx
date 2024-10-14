import { Button } from "@mtt-stack/ui";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-4">
      <h1 className="text-base font-bold">My App</h1>
      <span>Count: {count}</span>
      <button
        className="w-[200px] bg-pink-700"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click me
      </button>
      <Button onClick={() => setCount((prev) => prev - 1)}>UI Button</Button>
    </div>
  );
}

export default App;
