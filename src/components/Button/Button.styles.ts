import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-weight:${({ theme }) => theme.weight.bold}; 

  &:hover {
    opacity: 0.85;
  }
`;
