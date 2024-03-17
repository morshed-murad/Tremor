interface buttonProps {
  children: string;
  onClick: () => void;
}

const Buttons = ({ children, onClick }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 px-4 rounded bg-red-600 text-white font-serif "
    >
      {children}
    </button>
  );
};

export default Buttons;
