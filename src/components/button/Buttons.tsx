import { useThemeStore } from "../store/Dark/ThemeStor";

interface buttonProps {
  children: string;
  onClick: () => void;
}

const Buttons = ({ children, onClick }: buttonProps) => {
  const { darkMode } = useThemeStore();
  return (
    <button
      onClick={onClick}
      className={`p-2 px-4 rounded  font-serif ${
        darkMode ? "bg-red-600 text-white" : "bg-indigo-400 text-blue-700"
      }`}
    >
      {children}
    </button>
  );
};

export default Buttons;
