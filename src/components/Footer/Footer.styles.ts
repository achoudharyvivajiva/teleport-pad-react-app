import styled from "styled-components";

export const FooterBar = styled.footer`
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MidSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const MenuIcon = styled.img.attrs<{
  width: number;
  height: number;
}>((props) => ({
  width: props.width || 0,
  height: props.height || 0,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: contain;
`;
export const SunIcon = styled.img`
  width: 23px;
  height: 23px;
`;

export const Slider = styled.input.attrs({ type: "range" })`
  width: 100%;
  height: 4px;
  border-radius: 2px;

  appearance: none;
  background: #fff4;
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  font-weight: 400;
  color: white;
  font-size: 12px;
`;

export const BatteryIcon = styled.img`
  width: 25px;
  height: 12px;
`;
export const EndButton = styled.button`
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.bold};
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    opacity: 0.85;
  }

  background-color: ${({ theme }) => theme.colors.red};
  margin-right: 0px;
  box-shadow: 0px 2px 4px 0px #0000001a;
`;
