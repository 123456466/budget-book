import { ReactNode } from "react";

interface ContainerBoxProps {
  children: ReactNode;
  mtNum: string;
}

const ContainerBox = ({ children, mtNum }: ContainerBoxProps) => {
  return (
    <div
      className={`bg-white p-5 rounded-md outline-blue-500 outline-2 mt-${mtNum}`}
    >
      {children}
    </div>
  );
};

export default ContainerBox;
