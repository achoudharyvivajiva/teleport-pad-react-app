import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 75vh;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;
export const HeaderRight = styled.div`
  background: ${({ theme }) => theme.colors.red};
  border-radius: 50px;
  width: 30px;
  height: 30px;
`;

export const HeaderLeftHeading = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;
export const Icon = styled.img`
  width: 24px;
  height: 20px;
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  background: #ff4a4a;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: ${({ theme }) => theme.typography.body};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ff1f1f;
  }
`;

export const ParticipantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  overflow-y: auto;
`;
export const ParticipantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typography.h3};
  color: #4e4e4e;
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const ParticipantInfoLeft = styled.div``;

export const ParticipantInfoSubTitle = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.normal};
`;

export const ParticipantRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 0px 10px;
`;

export const MicroPhoneIcon = styled.img`
  width: 20px;
  height: 25px;
`;
export const VideoIcon = styled.img`
  width: 20px;
  height: 13px;
`;
