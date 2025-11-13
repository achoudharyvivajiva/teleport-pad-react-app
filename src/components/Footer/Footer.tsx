import {
  FooterBar,
  LeftSection,
  SunIcon,
  Slider,
  RightSection,
  BatteryIcon,
} from "./Footer.styles";
import sunIcon from "../../assets/icons/Brightnessicon.png";
import batteryIcon from "../../assets/icons/vector.png";
import { useEffect, useState } from "react";
import { Device } from "@capacitor/device";
import { ScreenBrightness } from "@capacitor-community/screen-brightness";

const Footer = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [brightness, setBrightness] = useState<number>(1);
  const handleBrightnessChange = async (value: number) => {
    setBrightness(value);
    try {
      await ScreenBrightness.setBrightness({ brightness: value });
    } catch (error) {
      console.error("Error setting brightness:", error);
    }
  };

  useEffect(() => {
    const getBrightness = async () => {
      try {
        const { brightness } = await ScreenBrightness.getBrightness();
        setBrightness(brightness);
      } catch (error) {
        console.error("Error getting brightness:", error);
      }
    };
    getBrightness();
  }, []);
  useEffect(() => {
    const fetchBattery = async () => {
      try {
        const info = await Device.getBatteryInfo();
        const level = info.batteryLevel
          ? Math.round(info.batteryLevel * 100)
          : null;

        setBatteryLevel(level);
      } catch (error) {
        console.error("Error fetching battery info:", error);
      }
    };

    fetchBattery();

    const interval = setInterval(fetchBattery, 30000);
    return () => clearInterval(interval);
  }, []);
  return (
    <FooterBar>
      <LeftSection>
        <SunIcon src={sunIcon} alt="brightness" />
        <Slider
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={brightness}
          onChange={(e) => handleBrightnessChange(parseFloat(e.target.value))}
        />
      </LeftSection>

      <RightSection>
        <BatteryIcon src={batteryIcon} alt="battery" />
        <span>{batteryLevel}%</span>
      </RightSection>
    </FooterBar>
  );
};

export default Footer;
