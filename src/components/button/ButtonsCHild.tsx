import { useThemeStore } from "../store/Dark/ThemeStor";

interface childProps {
  children: string;
}

const ButtonsCHild = ({ children }: childProps) => {
  const { darkMode } = useThemeStore();
  return (
    <button
      className={`p-2 px-4 rounded  font-serif ${
        darkMode ? "bg-red-600 text-white" : "bg-indigo-400 text-blue-700"
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonsCHild;
