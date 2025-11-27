import {
  FooterBar,
  LeftSection,
  SunIcon,
  Slider,
  RightSection,
  BatteryIcon,
  MenuItem,
  MenuBar,
  MenuIcon,
  MenuLabel,
  MidSection,
  EndButton,
} from "./Footer.styles";
import sunIcon from "../../assets/icons/Brightnessicon.png";
import batteryIcon from "../../assets/icons/vector.png";
import { useEffect, useState } from "react";
import { Device } from "@capacitor/device";
import { ScreenBrightness } from "@capacitor-community/screen-brightness";
import { useLocation, useNavigate } from "react-router-dom";
import videoIcon from "../../assets/icons/video.png";
import microphoneIcon from "../../assets/icons/Microphonewhite.png";
import flipCameraIcon from "../../assets/icons/flipcamera.png";
import microphoneMuteIcon from "../../assets/icons/Mute Unmute.png";
import videoOffIcon from "../../assets/icons/videoOff.png";
import { useAppDispatch } from "../../store/hooks";
import { membersActions } from "../../store/features/members/membersSlice";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dipatch = useAppDispatch();
  const routes = location.pathname.split("/");
  const currentRoute = routes[routes.length - 1];
  const userId = routes[routes.length - 2];
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [video, setVideo] = useState<boolean>(false);
  const [mic, setMic] = useState<boolean>(false);
  const [brightness, setBrightness] = useState<number>(1);
  const handleBrightnessChange = async (value: number) => {
    setBrightness(value);
    try {
      await ScreenBrightness.setBrightness({ brightness: value });
    } catch (error) {
      console.error("Error setting brightness:", error);
    }
  };
  const handleEndCall = () => {
    dipatch(membersActions.resetState());
    navigate(`/${userId}/family-and-friend`);
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
      {currentRoute === "video-call" && (
        <MidSection>
          <MenuBar>
            <MenuItem onClick={() => setVideo(!video)}>
              <MenuIcon
                src={video ? videoIcon : videoOffIcon}
                alt="video"
                width={20}
                height={20}
              />

              <MenuLabel>Video</MenuLabel>
            </MenuItem>
            <MenuItem onClick={() => setMic(!mic)}>
              <MenuIcon
                src={mic ? microphoneIcon : microphoneMuteIcon}
                alt="microphone-white"
                width={20}
                height={20}
              />
              <MenuLabel>Microphone</MenuLabel>
            </MenuItem>
            <MenuItem>
              <MenuIcon
                src={flipCameraIcon}
                alt="flip camera"
                width={20}
                height={20}
              />
              <MenuLabel>Flip Camera</MenuLabel>
            </MenuItem>
            <MenuItem>
              <EndButton onClick={handleEndCall}>
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
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                End
              </EndButton>
            </MenuItem>
          </MenuBar>
        </MidSection>
      )}

      <RightSection>
        <BatteryIcon src={batteryIcon} alt="battery" />
        <span>{batteryLevel}%</span>
      </RightSection>
    </FooterBar>
  );
};

export default Footer;
