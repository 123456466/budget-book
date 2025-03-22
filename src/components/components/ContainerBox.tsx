import { ReactNode } from "react";

interface ContainerBoxProps {
  children: ReactNode;
}

const ContainerBox = ({ children }: ContainerBoxProps) => {
  return <div className={`bg-white p-5 rounded-md mt-10`}>{children}</div>;
};

export default ContainerBox;
