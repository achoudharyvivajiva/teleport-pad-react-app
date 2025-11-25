import { useState } from "react";
import { selectInvitedMembers } from "../../../store/features/members/membersSlice";
import { useAppSelector } from "../../../store/hooks";
import {
  MicrophoneIcon,
  UserVideoInfo,
  VideoBox,
  VideoContanier,
  VideoInfo,
} from "./GridLayout.styles";
import microphoneIcon from "../../../assets/icons/Microphone.png";
import microphoneUmuteIcon from "../../../assets/icons/Unmute.png";
import { formatUsername } from "../../../utils/utils";
export const GridLayout = () => {
  const invitedMembers = useAppSelector(selectInvitedMembers);
  const [micStatus, setMicStatus] = useState<Record<string, boolean>>({});

  const toggleMic = (id: number) => {
    setMicStatus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <VideoContanier count={invitedMembers?.length}>
      {invitedMembers.map((member) => (
        <VideoBox key={member.id}>
          <VideoInfo>
            <MicrophoneIcon
              src={micStatus[member.id] ? microphoneIcon : microphoneUmuteIcon}
              onClick={() => toggleMic(member.id)}
              width={micStatus[member.id] ? 22 : 22}
              height={micStatus[member.id] ? 28 : 18}
            />
            <UserVideoInfo>{formatUsername(member.name)}</UserVideoInfo>
          </VideoInfo>
        </VideoBox>
      ))}
    </VideoContanier>
  );
};
