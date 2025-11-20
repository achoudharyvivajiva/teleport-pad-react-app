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
  color: ${({ theme }) => theme.colors.white};
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
export const MenuLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: #e2e2e2;
`;
export const MenuIcon = styled.img`
  width: 22px;
  height: 18px;
`;
