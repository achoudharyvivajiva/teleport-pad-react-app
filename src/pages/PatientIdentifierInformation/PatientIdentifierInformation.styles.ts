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
  justify-content: center;
  margin-bottom: 40px;
  width: 100%;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.h1};
`;

export const PatientIdentifierInformationSection = styled.div`
  display: flex;
  margin: 50px;
`;
export const PatientImageWrapper = styled.div`
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 100%;
    height: 224px;
    border-radius: 6px;
    object-fit: cover;
  }
`;

export const BasicInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.bold};
  text-decoration: underline;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  span.label {
    width: 160px;
    font-size: 18px;
    opacity: 0.8;
    font-weight: ${({ theme }) => theme.weight.normal};
    color: ${({ theme }) => theme.colors.white};
  }

  span.value {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.weight.bold};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Divider = styled.div`
  width: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 0 40px;
`;

export const AdditionalInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BottomSection = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const PrimaryButton = styled.button`
  padding: 15px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.bold};
  display: flex; /* ✅ make icon + text align */
  align-items: center;
  gap: 10px; /* ✅ spacing between icon & text */

  &:hover {
    opacity: 0.85;
  }

  background-color: ${({ theme }) => theme.colors.green};
  border: 1px solid #ffffff;
  margin-right: 20px;
`;

export const SecondaryButton = styled.button`
  padding: 15px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.bold};
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    opacity: 0.85;
  }

  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid #ffffff;
  margin-right: 0px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 20px;
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 150px;
`;
export const DeAssociateButton = styled.button`
  padding: 15px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  border: 1px solid #ffffff;
`;
