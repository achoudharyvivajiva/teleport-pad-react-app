import React from "react";
import { StyledContainer } from "./Container.styles";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
