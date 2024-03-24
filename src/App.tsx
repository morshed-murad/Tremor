import { useEffect } from "react";
import NabarLayout from "./components/navbar/NabarLayout";
import { useThemeStore } from "./components/store/Dark/ThemeStor";

function App() {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    {
      darkMode
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="scroll">
      <NabarLayout />
    </div>
  );
}

export default App;
