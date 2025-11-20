import {
  Nav,
  Logo,
  Version,
  MenuBar,
  MenuItem,
  MenuIcon,
  MenuLabel,
} from "./Navbar.styles";
import logo from "../../assets/img/newlogo.png";
import participantIcon from "../../assets/icons/participants.png";
import chatIcon from "../../assets/icons/chat.png";
import uploadIcon from "../../assets/icons/upload.png";
import layoutIcon from "../../assets/icons/layout.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const routes = location.pathname.split("/");
  const currentRoute = routes[routes.length - 1];

  return (
    <Nav>
      <Logo src={logo} />
      {currentRoute === "video-call" ? (
        <MenuBar>
          <MenuItem>
            <MenuIcon src={participantIcon} alt="participant" />
            <MenuLabel>Participants</MenuLabel>
          </MenuItem>
          <MenuItem>
            <MenuIcon src={chatIcon} alt="chat" />
            <MenuLabel>Chats</MenuLabel>
          </MenuItem>
          <MenuItem>
            <MenuIcon src={layoutIcon} alt="layout" />
            <MenuLabel>Layout</MenuLabel>
          </MenuItem>
          <MenuItem>
            <MenuIcon src={uploadIcon} alt="upload" />
            <MenuLabel>Upload</MenuLabel>
          </MenuItem>
        </MenuBar>
      ) : (
        <Version>Version: 1.00</Version>
      )}
    </Nav>
  );
};

export default Navbar;
