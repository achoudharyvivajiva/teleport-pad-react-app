import  { type InputHTMLAttributes } from "react";
import { StyledInput } from "./Input.styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: Props) => {
  return <StyledInput {...props} />;
};

export default Input;
