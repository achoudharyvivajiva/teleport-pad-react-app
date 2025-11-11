import styled from "styled-components";

export const Nav = styled.nav`
  height: 72px;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Version = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  opacity: 0.8;
  color: ${({theme})=>theme.colors.white};
`;
