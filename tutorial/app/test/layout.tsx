import { FC, ReactNode } from "react";
interface ITestLayoutProps {
  children: ReactNode;
}
const TestLayout: FC<ITestLayoutProps> = ({ children }) => {
  return (
    <div>
      TestLayout
      <h1>{children}</h1>
    </div>
  );
};

export default TestLayout;
