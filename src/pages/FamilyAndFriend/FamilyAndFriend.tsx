"use client";
import { Button, Container } from "../../components";
import {
  AddNewButton,
  BodyCell,
  BodyRow,
  BodyRowWithCenter,
  BodySection,
  CheckBoxInput,
  CheckBoxWrapper,
  CheckMark,
  DeleteBtn,
  Divider,
  ErrorText,
  FooterSection,
  Form,
  FormGroup,
  FormWrapper,
  HeadCell,
  HeaderLeft,
  HeaderMainHeading,
  HeaderMid,
  HeaderRight,
  HeaderSection,
  HeadRow,
  Icon,
  Input,
  InvitationHeading,
  InvitationSection,
  InvitationSubHeading,
  Label,
  ModelBody,
  ModelFooter,
  ModelHeader,
  ModelHeaderTitle,
  ModelPrimaryButton,
  PageWrapper,
  Paragraph,
  StepSection,
  StepSpan,
  StyledTable,
  TableBody,
  TableContainer,
  TableHead,
  TickIcon,
} from "./FamilyAndFriend.styles";
import Modal from "react-modal";
import peopleIcon from "../../assets/icons/people.png";
import inviteIcon from "../../assets/icons/invite.svg";
import tickIcon from "../../assets/icons/tick.png";

import { useEffect, useState } from "react";
import { formatTime } from "../../utils/utils";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { errorMessage } from "../../utils/toasters";
import toast from "react-hot-toast";
import type { MemberFormInputType, MembersType } from "../../types/members";
import { useAppDispatch } from "../../store/hooks";
import { membersActions } from "../../store/features/members/membersSlice";

export const FamilyAndFriend = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<MemberFormInputType>();
  const [showModel, setShowModel] = useState<boolean>(false);
  const [showInvitationView, setShowInvitationView] = useState<boolean>(false);
  const [friendAndFamilyData, setFriendAndFamilyData] = useState<MembersType[]>(
    [
      {
        id: 1,
        name: "Simon",
        relation: "Father",
        mobile: "638 - 733 - 839",
        email: "name.surename@domain.com",
        checked: false,
      },
      {
        id: 2,
        name: "Daniel Lawrence",
        relation: "Friend",
        mobile: "638 - 733 - 839",
        email: "name.surename@domain.com",
        checked: false,
      },
      {
        id: 3,
        name: "Simon",
        relation: "Father",
        mobile: "638 - 733 - 839",
        email: "name.surename@domain.com",
        checked: false,
      },
      {
        id: 4,
        name: "Daniel Lawrence",
        relation: "Friend",
        mobile: "638 - 733 - 839",
        email: "name.surename@domain.com",
        checked: false,
      },
      {
        id: 5,
        name: "Simon",
        relation: "Father",
        mobile: "638 - 733 - 839",
        email: "name.surename@domain.com",
        checked: false,
      },
      {
        id: 6,
        name: "Daniel Lawrence",
        relation: "Friend",
        mobile: "638 - 733 - 839",
        email: "name.surename@domain.com",
        checked: false,
      },
      {
        id: 7,
        name: "Simon",
        relation: "Father",
        mobile: "638 - 733 - 839",
        email: "name.surename@domain.com",
        checked: false,
      },
      {
        id: 8,
        name: "Daniel Lawrence",
        relation: "Friend",
        mobile: "638 - 733 - 839",
        email: "name.surename@domain.com",
        checked: false,
      },
    ]
  );

  const handleAddMember: SubmitHandler<MemberFormInputType> = (data) => {
    setShowModel(false);
    reset();
    const memberId = friendAndFamilyData.length;
    const newMember = { ...data, id: memberId + 1 };
    const updatedMembers: any = [...friendAndFamilyData, newMember];
    setFriendAndFamilyData(updatedMembers);
  };

  const handleRemoveMember = (id: number) => {
    const updateMember = friendAndFamilyData.filter((item) => item.id !== id);
    setFriendAndFamilyData(updateMember);
  };
  const handleSelectedInvaitationMembers = (id: number, val: boolean) => {
    const updatedMembers = friendAndFamilyData.map((mem) => {
      if (mem.id === id) {
        return { ...mem, checked: val, inviteTime: formatTime(new Date()) };
      } else {
        return mem;
      }
    });
    setFriendAndFamilyData(updatedMembers);
  };
  const handleSendInvitation = () => {
    const filterCheckedMembers = friendAndFamilyData.filter(
      (mem) => mem.checked === true
    );
    const filterUnCheckedMembers = friendAndFamilyData.filter(
      (mem) => mem.checked === false
    );
    dispatch(
      membersActions.handleInvitedMembers({
        invitedMembers: filterCheckedMembers,
        unInvitedMembers: filterUnCheckedMembers,
      })
    );

    if (filterCheckedMembers?.length) {
      toast.dismiss();
      setShowInvitationView(true);
    } else {
      errorMessage("Please select at least one member");
    }
  };
  const handleCancel = () => {
    if (!showInvitationView) {
      navigate(`/patient-identifier-information/${id}`);
    } else {
      setShowInvitationView(false);
    }
  };

  useEffect(() => {
    if (showInvitationView) {
      const timer = setTimeout(() => {
        navigate(`/${id}/connecting`);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showInvitationView, navigate, id]);

  return (
    <Container>
      <PageWrapper>
        <HeaderSection>
          <HeaderLeft />
          <HeaderMid>
            <HeaderMainHeading>
              <Icon src={peopleIcon} alt="people" height={24} width={36} />
              Connect with Family or Friends
            </HeaderMainHeading>
          </HeaderMid>
          <HeaderRight>
            <Button
              bgcolor="#05324E"
              color="#FFFFFF"
              hasIcon
              iconWidth={24}
              iconHeight={20}
              border="1px solid #ffffff"
            >
              More Info !
            </Button>
          </HeaderRight>
        </HeaderSection>
        <BodySection>
          {!showInvitationView ? (
            <StepSection>
              <StepSpan>Step 1 -</StepSpan>
              <Paragraph>
                Choose who you want to invite . Select from given contact list
                or add new contact
              </Paragraph>
            </StepSection>
          ) : (
            <InvitationSection>
              <TickIcon src={tickIcon} alt="tick" />
              <InvitationHeading>
                Invitations are sent successfully !
              </InvitationHeading>
              <InvitationSubHeading>
                Your video call will begin as soon as the first person joins
              </InvitationSubHeading>
            </InvitationSection>
          )}
          <TableContainer>
            <StyledTable>
              <TableHead>
                <HeadRow>
                  {!showInvitationView && <HeadCell>Invite</HeadCell>}
                  <HeadCell>Name</HeadCell>
                  <HeadCell>Relation</HeadCell>
                  <HeadCell>Mobile Number</HeadCell>
                  <HeadCell>Email Address</HeadCell>
                  <HeadCell>
                    {showInvitationView ? "Ivited Time" : "Remove"}
                  </HeadCell>
                </HeadRow>
              </TableHead>
              {friendAndFamilyData?.length ? (
                <TableBody>
                  {(showInvitationView
                    ? friendAndFamilyData.filter(
                        (member) => member.checked === true
                      )
                    : friendAndFamilyData
                  ).map((member) => (
                    <BodyRow key={member.id}>
                      {!showInvitationView && (
                        <BodyCell>
                          <CheckBoxWrapper>
                            <CheckBoxInput
                              checked={member.checked}
                              onChange={(e) =>
                                handleSelectedInvaitationMembers(
                                  member.id,
                                  e.target.checked
                                )
                              }
                            />
                            <CheckMark />
                          </CheckBoxWrapper>
                        </BodyCell>
                      )}

                      <BodyCell>
                        {member.name}
                        <Divider />
                      </BodyCell>

                      <BodyCell>
                        {member.relation}
                        <Divider />
                      </BodyCell>

                      <BodyCell>
                        {member.mobile}
                        <Divider />
                      </BodyCell>

                      <BodyCell>
                        {member.email}
                        <Divider />
                      </BodyCell>

                      <BodyCell>
                        {showInvitationView ? (
                          member.inviteTime
                        ) : (
                          <DeleteBtn
                            onClick={() => handleRemoveMember(member.id)}
                          >
                            ✕
                          </DeleteBtn>
                        )}
                      </BodyCell>
                    </BodyRow>
                  ))}
                </TableBody>
              ) : (
                <TableBody>
                  <BodyRowWithCenter>
                    <BodyCell colSpan={6}>No data found!</BodyCell>
                  </BodyRowWithCenter>
                </TableBody>
              )}
            </StyledTable>
          </TableContainer>
          {!showInvitationView && (
            <AddNewButton onClick={() => setShowModel(true)}>
              + Add New
            </AddNewButton>
          )}
          {!showInvitationView && (
            <StepSection>
              <StepSpan>Step 2 -</StepSpan>
              <Paragraph>
                Click on the Send invitation Button to send your guests a Link
                Via SMS Text Message & email
              </Paragraph>
            </StepSection>
          )}
        </BodySection>
        <FooterSection>
          {!showInvitationView && (
            <Button
              bgcolor="#027564"
              color="#FFFFFF"
              hasIcon
              iconWidth={20}
              iconHeight={20}
              src={inviteIcon}
              border="1px solid #ffffff"
              padding="15px 20px"
              width="220px"
              onClick={handleSendInvitation}
            >
              Send Invitation
            </Button>
          )}
          <Button
            bgcolor="#D42A2A"
            color="#FFFFFF"
            hasIcon
            border="1px solid #ffffff"
            padding="15px 20px"
            width="220px"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </FooterSection>
        <Modal
          isOpen={showModel}
          ariaHideApp={false}
          onRequestClose={() => setShowModel(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            content: {
              width: "840px",
              height: "420px",
              margin: "auto",
              background: "white",
              borderRadius: "4px",
              padding: "0px",
              border: "none",
              zIndex: 1000,
            },
            overlay: {
              background: "#0A0A0AC7",
              zIndex: 999,
            },
          }}
        >
          <ModelHeader>
            <ModelHeaderTitle>Add Family and Friends</ModelHeaderTitle>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer"
              onClick={() => {
                setShowModel(false);
                reset();
                clearErrors();
              }}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </ModelHeader>
          <ModelBody>
            <Form onSubmit={handleSubmit(handleAddMember)}>
              <FormWrapper>
                <FormGroup>
                  <Label>Participant Name</Label>
                  <Input
                    style={{ borderColor: errors.name ? "red" : undefined }}
                    placeholder="John Martin"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                </FormGroup>

                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input
                    style={{ borderColor: errors.mobile ? "red" : undefined }}
                    placeholder="+01 66262 62626"
                    type="number"
                    {...register("mobile", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.mobile && (
                    <ErrorText>{errors.mobile.message}</ErrorText>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>Email Address</Label>
                  <Input
                    style={{ borderColor: errors.email ? "red" : undefined }}
                    placeholder="test@email.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <ErrorText>{errors.email.message}</ErrorText>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>Select Relation</Label>
                  <Input
                    style={{ borderColor: errors.relation ? "red" : undefined }}
                    placeholder="Father"
                    {...register("relation", {
                      required: "Relation is required",
                    })}
                  />
                  {errors.relation && (
                    <ErrorText>{errors.relation.message}</ErrorText>
                  )}
                </FormGroup>
              </FormWrapper>

              <ModelFooter>
                <ModelPrimaryButton type="submit">
                  Add Participant
                </ModelPrimaryButton>
              </ModelFooter>
            </Form>
          </ModelBody>
        </Modal>
      </PageWrapper>
    </Container>
  );
};
