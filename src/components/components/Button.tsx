interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-900/30 px-4 cursor-pointer rounded-sm text-blue-900 hover:bg-white  hover:outline-2 outline-blue-900">
      {children}
    </button>
  );
};

export default Button;
