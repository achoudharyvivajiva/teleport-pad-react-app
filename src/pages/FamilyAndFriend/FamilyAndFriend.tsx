"use client";
import { Container } from "../../components";
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
  MoreInfoButton,
  PageWrapper,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
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
    dispatch(membersActions.handleInvitedMembers(filterCheckedMembers));

    if (filterCheckedMembers?.length) {
      toast.dismiss();
      setShowInvitationView(true);
    } else {
      errorMessage("Please select at least one member");
    }
  };
  const handleCancel = () => {
    if (!showInvitationView) {
      console.log(id);

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
              <Icon src={peopleIcon} alt="people" />
              Connect with Family or Friends
            </HeaderMainHeading>
          </HeaderMid>
          <HeaderRight>
            <MoreInfoButton>More Info !</MoreInfoButton>
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
            <PrimaryButton onClick={handleSendInvitation}>
              <Icon src={inviteIcon} alt="people" />
              Send Invitation
            </PrimaryButton>
          )}

          <SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
        </FooterSection>
        <Modal
          isOpen={showModel}
          ariaHideApp={false}
          onRequestClose={() => setShowModel(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            content: {
              width: "840px",
              height: "350px",
              margin: "auto",
              background: "white",
              borderRadius: "4px",
              padding: "0px",
              border: "none",
            },
            overlay: {
              background: "#0A0A0AC7",
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
                    placeholder="John Martin"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span style={{ color: "red" }}>{errors.name.message}</span>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input
                    placeholder="+01 66262 62626"
                    type="number"
                    {...register("mobile", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.mobile && (
                    <span style={{ color: "red" }}>
                      {errors.mobile.message}
                    </span>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>Email Address</Label>
                  <Input
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
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>Select Relation</Label>
                  <Input
                    placeholder="Father"
                    {...register("relation", {
                      required: "Relation is required",
                    })}
                  />
                  {errors.relation && (
                    <span style={{ color: "red" }}>
                      {errors.relation.message}
                    </span>
                  )}

                  {errors.relation && (
                    <span style={{ color: "red" }}>
                      {errors.relation.message}
                    </span>
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
