import styled from "styled-components";

export const Nav = styled.nav`
  height: clamp(60px, 8vh, 90px);
  padding: 0 clamp(12px, 2vw, 32px);
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Safe areas (for newer iPads with rounded corners) */
  padding-left: max(env(safe-area-inset-left), 2vw);
  padding-right: max(env(safe-area-inset-right), 2vw);
`;

export const Logo = styled.img`
  height: clamp(28px, 4vh, 48px);
  object-fit: contain;
`;

export const Version = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(12px, 1.6vw, 18px);
  opacity: 0.8;
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: clamp(16px, 4vw, 50px);
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(3px, 0.8vh, 8px);
  cursor: pointer;
`;

export const MenuLabel = styled.span`
  font-size: clamp(12px, 1.6vw, 20px);
  font-weight: ${({ theme }) => theme.weight.bold};
  color: #e2e2e2;
`;

export const MenuIcon = styled.img`
  width: clamp(18px, 2.5vw, 32px);
  height: clamp(16px, 2.2vw, 28px);
  object-fit: contain;
`;
