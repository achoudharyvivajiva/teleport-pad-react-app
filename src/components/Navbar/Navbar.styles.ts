import styled from "styled-components";

export const Nav = styled.nav`
  padding: 20px;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
`;

export const Logo = styled.h1`
  margin: 0;
  font-weight: 700;
`;
