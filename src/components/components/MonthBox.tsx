import { ReactNode } from "react";

interface MonthBoxProps {
  chldren: ReactNode;
}

const MonthBox = ({ chldren }: MonthBoxProps) => {
  return (
    <div className="cursor-pointer outline-blue-300 outline-1 rounded-md w-40 h-18 m-5 text-4xl text-indigo-900 flex justify-center items-center hover:bg-sky-200/75">
      {chldren}
    </div>
  );
};

export default MonthBox;
