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
  margin-bottom: 30px;
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
  font-size: ${({ theme }) => theme.typography.h1};
  font-weight: ${({ theme }) => theme.weight.bold};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
`;
export const HeaderMainPara = styled.p`
  font-size: 16px;
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
  padding: 15px 20px;
  background: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 6px 0px #00000038;
  font-weight: ${({ theme }) => theme.weight.bold};
  &:hover {
    opacity: 0.85;
  }
`;
export const FormSection = styled.div`
  width: 65%;
  margin: 0 auto 40px auto;
`;
export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: ${({ theme }) => theme.typography.small};
`;
export const FormInput = styled.input.attrs({
  type: "number",
})`
  width: 100%;
  padding: 14px;
  border-radius: 4px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 15px;

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
    background-color: rgba(0, 255, 0, 0.05);
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
  }
`;

export const FormOR = styled.div`
  text-align: center;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.weight.normal};
  font-size: ${({ theme }) => theme.typography.body};
`;

export const ScanSection = styled.div`
  display: flex;
  /* justify-content: start; */
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 40px;
`;

export const ScanLogo = styled.img`
  width: 184px;
  height: 100%;
`;

export const ScanRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`;
export const ScanHeading = styled.h3`
  margin: 0;
  font-size: 21px;
`;

export const ScanPara = styled.h3`
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: ${({ theme }) => theme.typography.small};
  opacity: 0.8;
  margin-bottom: 10px;
`;

export const ScannerBox = styled.div`
  width: 100%;
  height: 104px;
  background: repeating-conic-gradient(#444 0% 25%, #777 0% 50%) 50% / 30px 30px;
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
  padding: 15px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.body};
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
`;
export const FooterLeft = styled.div`
  flex: 1;
`;
export const FooterLeftImg = styled.img`
  height: auto;
  width: 250px;
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
  font-size: ${({ theme }) => theme.typography.h3};
  margin: 10px 0px;
`;
export const FooterLowerContent = styled.img`
  height: 80px;
  width: 100%;
`;
