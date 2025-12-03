import {
  globalActions,
  selectpanel,
} from "../../store/features/global/globalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  AddNewParticipantsContainer,
  ButtonContainer,
  ChatBoxContainer,
  ChatInfo,
  ChatInfoHeading,
  ChatInfoPara,
  CloseButton,
  Container,
  HeaderLeft,
  HeaderLeftHeading,
  HeaderRight,
  HeaderSection,
  Icon,
  Input,
  MessageContanier,
  MicroPhoneIcon,
  NumberInput,
  ParticipantInfo,
  ParticipantInfoLeft,
  ParticipantInfoSubTitle,
  ParticipantRight,
  ParticipantsList,
  SelectParticipantsContainer,
  SendButton,
  SendImage,
  SendMessageTextArea,
  StyledDropdown,
  VideoIcon,
} from "./ChatAndParticipants.styles";
import participantsIcon from "../../assets/icons/primary/participants.png";
import chatIcon from "../../assets/icons/primary/chat.png";
import microPhoneIcon from "../../assets/icons/primary/Microphone.png";
import videoIcon from "../../assets/icons/primary/video.png";
import addUserIcon from "../../assets/icons/Add User.png";
import telephoneIcon from "../../assets/icons/telephone.png";
import SendIcon from "../../assets/icons/white/send.png";

import {
  selectCallType,
  selectInvitedMembers,
  selectUnInvitedMembers,
} from "../../store/features/members/membersSlice";
import Button from "../Button/Button";
import { useState } from "react";
import { AddButton } from "../../pages/PatientIdentifierInformation/PatientIdentifierInformation.styles";
import { Dropdown } from "primereact/dropdown";

export const ChatAndParticipants = () => {
  const dispatch = useAppDispatch();
  const callType = useAppSelector(selectCallType);
  const invitedMembers = useAppSelector(selectInvitedMembers);
  const unInvitedMembers = useAppSelector(selectUnInvitedMembers);
  // const filterUnInvitedParticipants=unInvitedMembers?.map((member)=>{
  //   return {name:""}
  // })
  const currentPanel = useAppSelector(selectpanel);
  const [addExternalParticipants, setAddExternalParticipants] =
    useState<boolean>(false);
  const [showExternalParticipants, setShowExternalParticipants] =
    useState<boolean>(false);
  return (
    <Container>
      <HeaderSection>
        <HeaderLeft>
          <Icon
            width={24}
            height={20}
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
          {callType !== "provider" && (
            <>
              <Button
                bgcolor={showExternalParticipants ? "#D9D9D9" : "#0E4B71"}
                src={addUserIcon}
                hasIcon
                iconWidth={26}
                iconHeight={30}
                onClick={() => setShowExternalParticipants(true)}
                disabled={showExternalParticipants ? true : false}
              >
                Add External Participants
              </Button>
              {showExternalParticipants && (
                <>
                  <SelectParticipantsContainer>
                    <StyledDropdown>
                      <Dropdown
                        // value={selectedLanguage}
                        // onChange={(e) => setSelectedLanguage(e.value)}
                        options={unInvitedMembers}
                        optionLabel="name"
                        placeholder="Select a Participant"
                      />
                    </StyledDropdown>
                    <Button
                      bgcolor={
                        addExternalParticipants ? "#E735350D" : "#F2FAFF"
                      }
                      color={addExternalParticipants ? "#D42A2A" : "#0E4B71"}
                      border={
                        addExternalParticipants
                          ? "1px solid #E73535"
                          : "1px solid #0E4B71"
                      }
                      width="65px"
                      onClick={() =>
                        setAddExternalParticipants(!addExternalParticipants)
                      }
                    >
                      {addExternalParticipants ? "Remove" : "+Add"}
                    </Button>
                  </SelectParticipantsContainer>

                  {addExternalParticipants && (
                    <AddNewParticipantsContainer>
                      <Input placeholder="Name of Participant" />
                      <NumberInput placeholder="443-222-222" type="number" />
                    </AddNewParticipantsContainer>
                  )}
                  <ButtonContainer>
                    <Button
                      bgcolor="#D42A2A"
                      onClick={() => setShowExternalParticipants(false)}
                    >
                      Close
                    </Button>
                    <AddButton>
                      <Icon
                        src={telephoneIcon}
                        alt="people"
                        width={16}
                        height={14}
                      />
                      Call
                    </AddButton>
                  </ButtonContainer>
                </>
              )}
            </>
          )}

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
                  <CloseButton
                    width="18px"
                    height="18px"
                    onClick={() =>
                      dispatch(globalActions.handleShowPanel("none"))
                    }
                  >
                    ✕
                  </CloseButton>
                </ParticipantRight>
              </ParticipantInfo>
            );
          })}
        </ParticipantsList>
      ) : (
        <>
          <ChatBoxContainer>
            <ChatInfo>
              <ChatInfoHeading>Start a Conversation </ChatInfoHeading>
              <ChatInfoPara>
                Connect with the participant, share key points and get data
                update
              </ChatInfoPara>
            </ChatInfo>
          </ChatBoxContainer>
          <MessageContanier>
            <SendMessageTextArea placeholder="Write a message......"></SendMessageTextArea>
            <SendButton>
              <SendImage src={SendIcon} alt="send message" />
            </SendButton>
          </MessageContanier>
        </>
      )}
    </Container>
  );
};
