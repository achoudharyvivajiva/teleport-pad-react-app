import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-weight: 600;

  &:hover {
    opacity: 0.85;
  }
`;
