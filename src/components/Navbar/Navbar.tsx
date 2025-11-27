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
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  globalActions,
  selectLayout,
  selectpanel,
} from "../../store/features/global/globalSlice";

const Navbar = () => {
  const layout = useAppSelector(selectLayout);

  const panel = useAppSelector(selectpanel);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const routes = location.pathname.split("/");
  const currentRoute = routes[routes.length - 1];
  const handleLayout = () => {
    const changelayout = layout === "grid" ? "list" : "grid";
    dispatch(globalActions.handleVideolayout(changelayout));
    dispatch(globalActions.handleShowPanel("none"));
  };

  const handleShowPanel = (currentPanel: "participants" | "none" | "chat") => {
    const newPanel = panel === currentPanel ? "none" : currentPanel;
    dispatch(globalActions.handleShowPanel(newPanel));
  };

  return (
    <Nav>
      <Logo src={logo} />
      {currentRoute === "video-call" ? (
        <MenuBar>
          <MenuItem onClick={() => handleShowPanel("participants")}>
            <MenuIcon
              src={participantIcon}
              alt="participant"
              width={30}
              height={20}
            />
            <MenuLabel>Participants</MenuLabel>
          </MenuItem>
          <MenuItem onClick={() => handleShowPanel("chat")}>
            <MenuIcon src={chatIcon} alt="chat" width={20} height={20} />
            <MenuLabel>Chats</MenuLabel>
          </MenuItem>
          <MenuItem onClick={handleLayout}>
            <MenuIcon src={layoutIcon} alt="layout" width={20} height={20} />
            <MenuLabel>Layout</MenuLabel>
          </MenuItem>
          <MenuItem
            onClick={() => dispatch(globalActions.handleShowUploadModel(true))}
          >
            <MenuIcon src={uploadIcon} alt="upload" width={20} height={20} />
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
