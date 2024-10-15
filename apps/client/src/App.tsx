import { useTheme } from "@modules/theme/theme-store";
import { Button } from "@mtt-stack/ui";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const { setTheme } = useTheme();

  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch("api/books");
      const { books } = await res.json();
      setCount(books.length);
    }

    fetchBooks();
  }, []);

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-4">
      <h1 className="text-base font-bold">My App</h1>
      <span>Books Count: {count}</span>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => setCount((prev) => prev - 1)}>
          -
        </Button>
        <Button variant="outline" onClick={() => setCount((prev) => prev + 1)}>
          +
        </Button>
      </div>
      <Button onClick={() => setTheme("dark")}>Dark Theme</Button>
      <Button onClick={() => setTheme("light")}>Light Theme</Button>
    </div>
  );
}

export default App;
