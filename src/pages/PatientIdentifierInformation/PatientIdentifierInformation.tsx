import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components";
import {
  AddButton,
  AdditionalInfoSection,
  BasicInfoSection,
  ButtonsContainer,
  CloseButton,
  DeAssociateButton,
  Divider,
  FooterSection,
  HeaderSection,
  Icon,
  InfoRow,
  PageWrapper,
  PatientIdentifierInformationSection,
  PatientImageWrapper,
  PrimaryButton,
  SecondaryButton,
  SectionTitle,
  StyledDropdown,
} from "./PatientIdentifierInformation.styles";
import profile from "../../assets/img/profile.jpg";
import peopleIcon from "../../assets/icons/people.png";
import telephoneIcon from "../../assets/icons/telephone.png";

import interIcon from "../../assets/icons/interpreter-.png";
import { useState } from "react";
import { languages } from "../../utils/utils";
import { Dropdown } from "primereact/dropdown";
export const PatientIdentifierInformation = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] =
    useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Container>
      <PageWrapper>
        <HeaderSection>Patient Identifier Information</HeaderSection>
        <PatientIdentifierInformationSection>
          <PatientImageWrapper>
            <img src={profile} alt="patient" />
          </PatientImageWrapper>

          <BasicInfoSection>
            <SectionTitle>Basic Patient Info</SectionTitle>

            <InfoRow>
              <span className="label">Patient Name</span>
              <span className="value">Ashley Testpatient</span>
            </InfoRow>

            <InfoRow>
              <span className="label">Gender</span>
              <span className="value">Female</span>
            </InfoRow>

            <InfoRow>
              <span className="label">Age</span>
              <span className="value">33 Y.O.</span>
            </InfoRow>

            <InfoRow>
              <span className="label">Date Of Brith</span>
              <span className="value">Aug 2, 1989</span>
            </InfoRow>
          </BasicInfoSection>

          <Divider />

          <AdditionalInfoSection>
            <SectionTitle>Additional Info</SectionTitle>

            <InfoRow>
              <span className="label">MRN</span>
              <span className="value">3001330978</span>
            </InfoRow>

            <InfoRow>
              <span className="label">CSN</span>
              <span className="value">5088152596</span>
            </InfoRow>

            <InfoRow>
              <span className="label">Unit</span>
              <span className="value">Room 302</span>
            </InfoRow>
          </AdditionalInfoSection>
        </PatientIdentifierInformationSection>

        <ButtonsContainer>
          <PrimaryButton onClick={() => navigate(`/${id}/family-and-friend`)}>
            <Icon src={peopleIcon} alt="people" />
            Connect with Family or Friends
          </PrimaryButton>

          {showLanguageDropdown ? (
            <>
              <StyledDropdown>
                <Dropdown
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.value)}
                  options={languages}
                  optionLabel="name"
                  placeholder="Select a Language"
                />
              </StyledDropdown>

              <AddButton>
                <Icon src={telephoneIcon} alt="people" />
                Add
              </AddButton>

              <CloseButton onClick={() => setShowLanguageDropdown(false)}>
                Close
              </CloseButton>
            </>
          ) : (
            <SecondaryButton onClick={() => setShowLanguageDropdown(true)}>
              <Icon src={interIcon} alt="inter icon" />
              Add Interpreter
            </SecondaryButton>
          )}
        </ButtonsContainer>

        <FooterSection>
          <DeAssociateButton onClick={() => navigate("/")}>
            De-associate Device With this Patient
          </DeAssociateButton>
        </FooterSection>
      </PageWrapper>
    </Container>
  );
};
