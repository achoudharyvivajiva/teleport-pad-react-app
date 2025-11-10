import styled from "styled-components";

export const StyledText = styled.p<{ variant: string }>`
  font-size: ${({ variant, theme }) =>
    variant === "small" ? theme.typography.small : theme.typography.body};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;
