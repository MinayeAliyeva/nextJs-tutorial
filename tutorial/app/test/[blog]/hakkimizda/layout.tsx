import React, { FC, ReactNode } from "react";
interface IHakkimizdaLayoutProps {
  children: ReactNode;
}
const HakkimizdaLayout: FC<IHakkimizdaLayoutProps> = ({ children }) => {
  return (
    <div>
      {children} <br />
      HakkimizdaLayout -dan{" "}
    </div>
  );
};

export default HakkimizdaLayout;
