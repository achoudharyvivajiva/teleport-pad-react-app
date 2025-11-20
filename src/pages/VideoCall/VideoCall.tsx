import { Container } from "../../components";
import {
  MicrophoneIcon,
  PageWrapper,
  UserVideoInfo,
  VideoBox,
  VideoContanier,
  VideoInfo,
} from "./VideoCall.styles";
import microphoneIcon from "../../assets/icons/Microphone.png";
import microphoneUmuteIcon from "../../assets/icons/Unmute.png";

import { formatUsername } from "../../utils/utils";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectInvitedMembers } from "../../store/features/members/membersSlice";
export default function VideoCall() {
  const invitedMembers = useAppSelector(selectInvitedMembers);
  const [mic, setMic] = useState<boolean>(false);
  const users = [1, 2, 3, 4];

  return (
    <Container>
      <PageWrapper>
        <VideoContanier count={users.length}>
          {invitedMembers.map((member) => (
            <VideoBox key={member.id}>
              <VideoInfo>
                <MicrophoneIcon
                  src={mic ? microphoneIcon : microphoneUmuteIcon}
                  alt="microphone"
                  onClick={() => setMic(!mic)}
                />

                <UserVideoInfo>{formatUsername(member.name)}</UserVideoInfo>
              </VideoInfo>
            </VideoBox>
          ))}
        </VideoContanier>
      </PageWrapper>
    </Container>
  );
}
