import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  box-sizing: border-box;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: clamp(20px, 3vh, 40px);
  width: 100%;
`;

export const HeaderLeft = styled.div`
  flex: 1;
`;
export const HeaderMid = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
  }
`;

export const HeaderMainHeading = styled.h1`
  font-size: clamp(20px, 2.5vw, 32px);
  font-weight: ${({ theme }) => theme.weight.bold};
  margin-bottom: clamp(8px, 1vh, 14px);
  color: ${({ theme }) => theme.colors.white};
`;
export const HeaderMainPara = styled.p`
  font-size: clamp(14px, 1.8vw, 20px);
  opacity: 0.8;
  font-weight: ${({ theme }) => theme.weight.normal};
  color: ${({ theme }) => theme.colors.gray};
`;

export const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
export const SecondaryButton = styled.button`
  padding: clamp(12px, 1.8vh, 18px) clamp(16px, 2vw, 24px);
  height: clamp(40px, 5vh, 50px);
  background: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 6px 0px #00000038;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: clamp(12px, 1.6vw, 18px);
  &:hover {
    opacity: 0.85;
  }
`;
export const FormSection = styled.div`
  width: clamp(60%, 65%, 70%);
  margin: 0 auto clamp(30px, 4vh, 50px) auto;
`;
export const FormLabel = styled.label`
  display: block;
  margin-bottom: clamp(8px, 1vh, 12px);
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: clamp(12px, 1.4vw, 16px);
`;
export const FormInput = styled.input.attrs({
  type: "number",
})`
  width: 100%;
  padding: clamp(12px, 1.6vh, 16px);
  border-radius: 4px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: clamp(14px, 1.8vw, 18px);

  /* Hide spinner arrows in Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide spinner arrows in Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
  }
`;

export const FormOR = styled.div`
  text-align: center;
  margin: clamp(12px, 1.8vh, 18px) 0;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.weight.normal};
  font-size: clamp(14px, 1.8vw, 18px);
`;

export const ScanSection = styled.div`
  display: flex;
  /* justify-content: start; */
  align-items: flex-start;
  gap: clamp(24px, 3vw, 48px);
  margin-bottom: clamp(30px, 4vh, 50px);
`;

export const ScanLogo = styled.img`
  width: clamp(140px, 18vw, 220px);
  height: auto;
  object-fit: contain;
`;

export const ScanRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`;
export const ScanHeading = styled.h3`
  margin: 0;
  font-size: clamp(18px, 2.2vw, 26px);
`;

export const ScanPara = styled.h3`
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: clamp(12px, 1.4vw, 16px);
  opacity: 0.8;
  margin-bottom: clamp(8px, 1vh, 12px);
`;

export const ScannerBox = styled.div`
  width: 100%;
  height: clamp(80px, 10vh, 120px);
  background: repeating-conic-gradient(#444 0% 25%, #777 0% 50%) 50% / clamp(24px, 3vw, 36px) clamp(24px, 3vw, 36px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
`;

export const BottomSection = styled.div`
  text-align: center;
`;

export const PrimaryButton = styled.button`
  padding: clamp(12px, 1.8vh, 18px) clamp(16px, 2vw, 24px);
  height: clamp(40px, 5vh, 50px);
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(14px, 1.8vw, 18px);
  font-weight: ${({ theme }) => theme.weight.bold};
  &:hover {
    opacity: 0.85;
  }
  background-color: ${({ theme }) => theme.colors.green};
  border: 1px solid #ffffff;
`;

export const FooterSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: clamp(16px, 2.5vh, 28px);
`;
export const FooterLeft = styled.div`
  flex: 1;
`;
export const FooterLeftImg = styled.img`
  height: auto;
  width: clamp(150px, 18vw, 240px);
  object-fit: contain;
`;

export const FooterRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterUpperContent = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(18px, 2.2vw, 24px);
  margin: clamp(8px, 1vh, 12px) 0px;
`;
export const FooterLowerContent = styled.img`
  height: clamp(45px, 6vh, 75px);
  width: 100%;
  object-fit: contain;
`;
