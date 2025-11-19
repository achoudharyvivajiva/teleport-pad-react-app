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
import scanLogo from "../../assets/img/scan.png";
import ipadScan from "../../assets/img/ipad.png";
import testCode from "../../assets/img/testcode.png";

const Home = () => {
  const navigate = useNavigate();
  const [idBandNumber, setIdBandNumber] = useState<number>();
  const handleAssociateDevice = () => {
    const idLength = idBandNumber?.toString().length;

    if (idBandNumber && idLength === 10) {
      navigate(`/patient-identifier-information/5080483241`);
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
            min={10}
            max={10}
            placeholder="Type CSN Number (eg. 5080483241)"
            value={idBandNumber == 0 ? "" : idBandNumber}
            onChange={(e) => setIdBandNumber(Number(e.target.value))}
          />
          <FormOR className="or">Or</FormOR>
          <ScanSection>
            <ScanLogo src={scanLogo} alt="scanlogo" />

            <ScanRight>
              <ScanHeading>Scan the Band Here</ScanHeading>
              <ScanPara>Scan your band's barcode using the camera.</ScanPara>
              <ScannerBox>
                {typeof window !== "undefined" && (
                  <Scanner
                    constraints={{ facingMode: "environment" }}
                    paused
                    onScan={(result: IDetectedBarcode[]) => {
                      if (result?.length > 0) {
                        console.log("Scanned:", result[0]?.rawValue);
                      }
                    }}
                    onError={(error) => console.log("Scanner Error:", error)}
                    styles={{
                      container: { width: "100%", height: "100%" },
                      video: {
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      },
                    }}
                  />
                )}
              </ScannerBox>
            </ScanRight>
          </ScanSection>
        </FormSection>

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
            <FooterLeftImg src={ipadScan} alt="ipadscaner" />
          </FooterLeft>
          <FooterRight>
            <FooterContent>
              <FooterUpperContent>Device Name</FooterUpperContent>
              <FooterLowerContent src={testCode} alt="testcode" />
            </FooterContent>
          </FooterRight>
        </FooterSection>
      </PageWrapper>
    </Container>
  );
};

export default Home;
