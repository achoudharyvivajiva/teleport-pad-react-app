import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 81vh;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  box-sizing: border-box;
  gap: 10px;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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
  font-weight: ${({ theme }) => theme.weight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.white};
`;
export const HeaderMainPara = styled.p`
  font-size: ${({ theme }) => theme.typography.body};
  opacity: 0.8;
  font-weight: ${({ theme }) => theme.weight.normal};
  color: ${({ theme }) => theme.colors.gray};
`;

export const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const FormSection = styled.div`
  width: clamp(60%, 65%, 70%);
  margin: 0 auto clamp(30px, 4vh, 50px) auto;
`;
export const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: ${({ theme }) => theme.typography.body};
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
  font-size: ${({ theme }) => theme.typography.body};

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
    border-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.white};
  }
`;

export const FormOR = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.md} 0;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.weight.normal};
  font-size: ${({ theme }) => theme.typography.h3};
`;

export const ScanSection = styled.div`
  display: flex;
  /* justify-content: start; */
  align-items: flex-start;
  gap: clamp(24px, 3vw, 48px);
  /* margin-bottom: clamp(30px, 4vh, 50px); */
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
`;

export const ScanPara = styled.h3`
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: ${({ theme }) => theme.typography.body};
  opacity: 0.8;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ScannerBox = styled.div`
  width: 100%;
  height: clamp(100px, 10vh, 140px);
  background: repeating-conic-gradient(#444 0% 25%, #777 0% 50%) 50% /
    clamp(24px, 3vw, 36px) clamp(24px, 3vw, 36px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
`;

export const BottomSection = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const FooterSection = styled.div`
  width: 100%;
  /* margin-top: auto; */
  /* padding-top: ${({ theme }) => theme.spacing.xl}; */
  display: flex;
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
  font-size: ${({ theme }) => theme.typography.body};
  margin: ${({ theme }) => theme.spacing.sm} 0px;
`;
export const FooterLowerContent = styled.img`
  height: clamp(45px, 6vh, 75px);
  object-fit: contain;
`;
