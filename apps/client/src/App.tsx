import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-[100vw] h-[100vh] gap-4 items-center justify-center flex-col bg-neutral-900 text-neutral-50">
      <h1 className="text-base font-bold text-neutral-50">My App</h1>
      <span>Count: {count}</span>
      <button
        className="bg-pink-700 w-[200px]"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
