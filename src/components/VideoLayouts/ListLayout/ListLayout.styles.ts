import styled from "styled-components";
export const MainStage = styled.div`
  flex: 1;
  display: flex;
  height: 80vh;
`;

export const LeftPanel = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  overflow-y: scroll;
`;

export const RightPanel = styled.div`
  flex: 1;
  width: 100%;
`;
export const ChatAndParticipantsPanel = styled.div`
  flex: 1;
  width: 15%;
  background: ${({ theme }) => theme.colors.white};
`;
export const MainVideoBox = styled.div`
  height: 580px;
  background: #000;
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0px 20px 20px 20px;
`;

export const MainVideoInfo = styled.div`
  width: 160px;
  height: 30px;
  position: absolute;
  padding: 10px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6px;
  background: #ebebeb;
  border: 1px solid #aeaeae;
  border-top-right-radius: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.bold};
`;
export const VideoContanier = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 22px;
`;

export const VideoBox = styled.div`
  width: 100%;
  height: 185px;
  background: #000;
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const VideoInfo = styled.div`
  width: 160px;
  height: 30px;
  position: absolute;
  padding: 10px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6px;
  background: #ebebeb;
  border: 1px solid #aeaeae;
  border-top-right-radius: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const UserVideoInfo = styled.span``;
export const MicrophoneIcon = styled.img.attrs<{
  width: number;
  height: number;
}>((props) => ({
  width: props.width || 0,
  height: props.height || 0,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
