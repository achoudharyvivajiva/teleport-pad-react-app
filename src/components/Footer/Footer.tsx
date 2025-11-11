
import {
  FooterBar,
  LeftSection,
  SunIcon,
  Slider,
  RightSection,
  BatteryIcon,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterBar>
      <LeftSection>
        <SunIcon src="./src/assets/icons/Brightnessicon.png" alt="brightness" />
        <Slider />
      </LeftSection>

      <RightSection>
        <BatteryIcon src="/src/assets/icons/vector.png" alt="battery" />
        <span>100%</span>
      </RightSection>
    </FooterBar>
  );
};

export default Footer;
