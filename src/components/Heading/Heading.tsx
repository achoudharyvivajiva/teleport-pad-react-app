import React from "react";
import { StyledHeading } from "./Heading.styles";

interface HeadingProps {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
}

const Heading = ({ level = 1, children }: HeadingProps) => {
  return <StyledHeading as={`h${level}`} level={level}>{children}</StyledHeading>;
};

export default Heading;
