interface buttonProps {
  children: string;
  onClick: () => void;
}

const Buttons = ({ children, onClick }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 px-4 rounded bg-red-600 text-white font-serif dark:bg-gray-800 hover:bg-red-600/80 hover:text-blue-500 transition-all duration-150 "
    >
      {children}
    </button>
  );
};

export default Buttons;
