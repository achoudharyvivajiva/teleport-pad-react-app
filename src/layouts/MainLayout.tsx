import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Content, IpadContainer } from "./MainLayout.styles";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <IpadContainer>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </IpadContainer>
  );
};

export default MainLayout;
