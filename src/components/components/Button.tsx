interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-900/30 px-4 h-10 cursor-pointer rounded-sm text-blue-900 hover:bg-white  hover:outline-2 outline-blue-900">
      {children}
    </button>
  );
};

export const DelButton = ({ children }: ButtonProps) => {
  return (
    <button className="bg-red-800/40 px-4 h-10 cursor-pointer rounded-sm text-red-900 hover:bg-white  hover:outline-2 outline-red-900">
      {children}
    </button>
  );
};
