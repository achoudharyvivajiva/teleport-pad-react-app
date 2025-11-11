import {
  PageWrapper,
  HeaderSection,
  FormSection,
  ScanSection,
  ScanRight,
  BottomSection,
  ScanLogo,
  HeaderMid,
  HeaderRight,
  HeaderLeft,
  FooterSection,
  FooterLeft,
  FooterRight,
  FooterUpperContent,
  FooterLowerContent,
  FooterContent,
  PrimaryButton,
  SecondaryButton,
  HeaderMainHeading,
  HeaderMainPara,
  FormLabel,
  FormInput,
  FormOR,
  ScanHeading,
  ScanPara,
  ScannerBox,
  FooterLeftImg,
} from "./Home.styles";
import { Container } from "../../components";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IDetectedBarcode } from "../../types/scanner";

const Home = () => {
  const navigate = useNavigate();
  const [toggleCamera, setToggleCamera] = useState<boolean>(false);
  const [idBandNumber, setIdBandNumber] = useState<number>();
  const handleAssociateDevice = () => {
    const idLength = idBandNumber?.toString().length;
    console.log(idLength);

    if (idBandNumber && idLength === 10) {
      navigate(`/PatientIdentifierInformation/5080483241`);
    } else {
    }
  };

  return (
    <Container>
      <PageWrapper>
        <HeaderSection>
          <HeaderLeft />
          <HeaderMid>
            <HeaderMainHeading>
              Enter or Scan Your ID Band Number
            </HeaderMainHeading>
            <HeaderMainPara>
              Please enter your ID band number or scan it to connect with your
              device.
            </HeaderMainPara>
          </HeaderMid>
          <HeaderRight>
            <SecondaryButton>Need Help?</SecondaryButton>
          </HeaderRight>
        </HeaderSection>

        <FormSection>
          <FormLabel>Enter ID Band Number</FormLabel>
          <FormInput
            type="text"
            placeholder="Type CSN Number (eg. 5080483241)"
            value={idBandNumber}
            onChange={(e) => setIdBandNumber(Number(e.target.value))}
          />
          <FormOR className="or">Or</FormOR>
        </FormSection>

        <ScanSection>
          {toggleCamera ? (
            <div onClick={() => setToggleCamera(false)}>
              <Scanner
                styles={{ container: { width: "184px", height: "147px" } }}
                onScan={(result: IDetectedBarcode[]) => console.log(result)}
                onError={(error: unknown) => console.log(error)}
              />
            </div>
          ) : (
            <ScanLogo
              src="./src/assets/img/scan.png"
              alt="scanlogo"
              onClick={() => setToggleCamera(true)}
            />
          )}

          <ScanRight>
            <ScanHeading>Scan the Band Here</ScanHeading>
            <ScanPara>Scan your band's barcode using the camera.</ScanPara>
            <ScannerBox />
          </ScanRight>
        </ScanSection>

        <BottomSection>
          <PrimaryButton
            onClick={() => handleAssociateDevice()}
            disabled={idBandNumber?.toString().length === 10 ? false : true}
          >
            Associate Device
          </PrimaryButton>
        </BottomSection>

        <FooterSection>
          <FooterLeft>
            <FooterLeftImg src="./src/assets/img/ipad.png" alt="ipadscaner" />
          </FooterLeft>
          <FooterRight>
            <FooterContent>
              <FooterUpperContent>Device Name</FooterUpperContent>
              <FooterLowerContent
                src="./src/assets/img/testcode.png"
                alt="testcode"
              />
            </FooterContent>
          </FooterRight>
        </FooterSection>
      </PageWrapper>
    </Container>
  );
};

export default Home;
