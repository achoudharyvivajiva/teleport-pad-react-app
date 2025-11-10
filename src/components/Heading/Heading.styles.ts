import styled from "styled-components";

export const StyledHeading = styled.h1<{ level: number }>`
  font-size: ${({ level, theme }) =>
    level === 1
      ? theme.typography.h1
      : level === 2
      ? theme.typography.h2
      : theme.typography.h3};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;
