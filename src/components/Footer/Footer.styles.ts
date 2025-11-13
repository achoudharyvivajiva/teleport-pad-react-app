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
