import { ReactNode } from "react";

interface MonthBoxProps {
  chldren: ReactNode;
}

const MonthBox = ({ chldren }: MonthBoxProps) => {
  return (
    <div className="cursor-pointer outline-indigo-950 outline-1 rounded-md w-40 h-18 m-5 text-4xl text-indigo-900 flex justify-center items-center hover:bg-blue-900/30">
      {chldren}
    </div>
  );
};

export default MonthBox;
