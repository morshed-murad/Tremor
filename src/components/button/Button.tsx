interface buttonProps {
  children: string;
}

const Button = ({ children }: buttonProps) => {
  return (
    <button className="p-2 px-4 rounded bg-red-600 text-white font-serif ">
      {children}
    </button>
  );
};

export default Button;
