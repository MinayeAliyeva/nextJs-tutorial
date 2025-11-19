import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import type { ReactNode } from "react";

interface RoutesLayoutProps {
  children: ReactNode;
}
const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex  mx-auto py-4">{children}</main>
  <Footer/>
    </div>
  );
};

export default RoutesLayout;
