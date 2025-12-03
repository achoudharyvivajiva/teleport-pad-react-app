import styled from "styled-components";

export const StyledButton = styled.button.attrs<{
  color: string;
  bgcolor: string;
  border: string;
  padding: string;
  width: string;
  textDecoration: string;
}>((props) => ({
  color: props.color,
  bgcolor: props.bgcolor,
  border: props.border,
  padding: props.padding,
  width: props.width,
  textDecoration: props.textDecoration,
}))`
  padding: ${(props) => props.padding};
  border-radius: 4px;
  ${(props) => props.width && `width: ${props.width};`}
  height: 45px;
  cursor: pointer;
  color: ${(props) => props.color};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: ${(props) => props.textDecoration};
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.border};
  /* margin-right: 10px; */
`;
export const Icon = styled.img.attrs<{
  width: number;
  height: number;
}>((props) => ({
  width: props.width || 20,
  height: props.height || 20,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
