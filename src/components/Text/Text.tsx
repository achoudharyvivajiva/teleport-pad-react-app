import React from "react";
import { StyledText } from "./Text.styles";

interface TextProps {
  variant?: "body" | "small";
  children: React.ReactNode;
}

const Text = ({ variant = "body", children }: TextProps) => {
  return <StyledText variant={variant}>{children}</StyledText>;
};

export default Text;
