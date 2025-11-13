import { useNavigate } from "react-router-dom";
import { Container } from "../../components";
import {
  AdditionalInfoSection,
  BasicInfoSection,
  BottomSection,
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
} from "./PatientIdentifierInformation.styles";
import profile from "../../assets/img/profile.jpg";
import peopleIcon from "../../assets/icons/people.png";
import interIcon from "../../assets/icons/interpreter-.png";
export const PatientIdentifierInformation = () => {
  const navigate = useNavigate();
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
              <span className="label">DOB</span>
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
        <BottomSection>
          <PrimaryButton>
            <Icon src={peopleIcon} alt="people" />
            Connect with Family or Frineds
          </PrimaryButton>
          <SecondaryButton>
            <Icon src={interIcon} alt="inter icon" />
            Add Interpreter
          </SecondaryButton>
        </BottomSection>

        <FooterSection>
          <DeAssociateButton onClick={() => navigate("/")}>
            De-associate Device With this Patient
          </DeAssociateButton>
        </FooterSection>
      </PageWrapper>
    </Container>
  );
};
