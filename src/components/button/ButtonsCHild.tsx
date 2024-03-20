interface childProps {
  children: string;
}

const ButtonsCHild = ({ children }: childProps) => {
  return (
    <button className="p-2 px-4 rounded bg-red-600 text-white font-serif ">
      {children}
    </button>
  );
};

export default ButtonsCHild;
