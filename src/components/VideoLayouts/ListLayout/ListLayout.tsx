import { useState } from "react";
import { selectInvitedMembers } from "../../../store/features/members/membersSlice";
import { useAppSelector } from "../../../store/hooks";
import {
  ChatAndParticipantsPanel,
  LeftPanel,
  MainStage,
  MainVideoBox,
  MainVideoInfo,
  MicrophoneIcon,
  RightPanel,
  UserVideoInfo,
  VideoBox,
  VideoContanier,
  VideoInfo,
} from "./ListLayout.styles";
import { formatUsername } from "../../../utils/utils";
import microphoneIcon from "../../../assets/icons/Microphone.png";
import microphoneUmuteIcon from "../../../assets/icons/Unmute.png";
import { ChatAndParticipants } from "../../ChatAndParticipants/ChatAndParticipants";
import { selectpanel } from "../../../store/features/global/globalSlice";
export const ListLayout = () => {
  const invitedMembers = useAppSelector(selectInvitedMembers);
  const panel = useAppSelector(selectpanel);

  const [micStatus, setMicStatus] = useState<Record<string, boolean>>({});

  const toggleMic = (id: number) => {
    setMicStatus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <MainStage>
      <LeftPanel>
        <VideoContanier>
          {invitedMembers.map((member) => (
            <VideoBox key={member.id}>
              <VideoInfo>
                <MicrophoneIcon
                  width={micStatus[member.id] ? 22 : 22}
                  height={micStatus[member.id] ? 28 : 18}
                  src={
                    micStatus[member.id] ? microphoneIcon : microphoneUmuteIcon
                  }
                  onClick={() => toggleMic(member.id)}
                />
                <UserVideoInfo>{formatUsername(member.name)}</UserVideoInfo>
              </VideoInfo>
            </VideoBox>
          ))}
        </VideoContanier>
      </LeftPanel>

      <RightPanel>
        <MainVideoBox key={invitedMembers[0].id}>
          <MainVideoInfo>
            <MicrophoneIcon
              width={micStatus[invitedMembers[0].id] ? 22 : 22}
              height={micStatus[invitedMembers[0].id] ? 28 : 18}
              src={
                micStatus[invitedMembers[0].id]
                  ? microphoneIcon
                  : microphoneUmuteIcon
              }
              onClick={() => toggleMic(invitedMembers[0].id)}
            />
            <UserVideoInfo>
              {formatUsername(invitedMembers[0].name)}
            </UserVideoInfo>
          </MainVideoInfo>
        </MainVideoBox>
      </RightPanel>
      {(panel === "chat" || panel === "participants") && (
        <ChatAndParticipantsPanel className="">
          <ChatAndParticipants />
        </ChatAndParticipantsPanel>
      )}
    </MainStage>
  );
};
