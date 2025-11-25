import {
  globalActions,
  selectpanel,
} from "../../store/features/global/globalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  CloseButton,
  Container,
  HeaderLeft,
  HeaderLeftHeading,
  HeaderRight,
  HeaderSection,
  Icon,
  MicroPhoneIcon,
  ParticipantInfo,
  ParticipantInfoLeft,
  ParticipantInfoSubTitle,
  ParticipantRight,
  ParticipantsList,
  VideoIcon,
} from "./ChatAndParticipants.styles";
import participantsIcon from "../../assets/icons/primary/participants.png";
import chatIcon from "../../assets/icons/primary/chat.png";
import microPhoneIcon from "../../assets/icons/primary/Microphone.png";
import videoIcon from "../../assets/icons/primary/video.png";

import { selectInvitedMembers } from "../../store/features/members/membersSlice";

export const ChatAndParticipants = () => {
  const dispatch = useAppDispatch();
  const invitedMembers = useAppSelector(selectInvitedMembers);
  const currentPanel = useAppSelector(selectpanel);
  return (
    <Container>
      <HeaderSection>
        <HeaderLeft>
          <Icon
            src={currentPanel === "participants" ? participantsIcon : chatIcon}
            alt="part"
          />
          <HeaderLeftHeading>
            {currentPanel === "participants"
              ? `Participants (${invitedMembers?.length})`
              : "Chat"}
          </HeaderLeftHeading>
        </HeaderLeft>
        <HeaderRight>
          <CloseButton
            onClick={() => dispatch(globalActions.handleShowPanel("none"))}
          >
            ✕
          </CloseButton>
        </HeaderRight>
      </HeaderSection>
      {currentPanel === "participants" ? (
        <ParticipantsList>
          {invitedMembers?.map((memeber) => {
            return (
              <ParticipantInfo key={memeber?.id}>
                <ParticipantInfoLeft>
                  {memeber?.name}
                  <ParticipantInfoSubTitle>UMMS</ParticipantInfoSubTitle>
                </ParticipantInfoLeft>
                <ParticipantRight>
                  <MicroPhoneIcon src={microPhoneIcon} alt="micro-phone" />
                  <VideoIcon src={videoIcon} alt="video-icon" />
                </ParticipantRight>
              </ParticipantInfo>
            );
          })}
        </ParticipantsList>
      ) : (
        ""
      )}
    </Container>
  );
};
