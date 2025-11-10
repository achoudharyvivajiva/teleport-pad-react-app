import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div style={{ padding: 20 }}>{children}</div>
      <Footer/>
    </>
  );
};

export default MainLayout;
