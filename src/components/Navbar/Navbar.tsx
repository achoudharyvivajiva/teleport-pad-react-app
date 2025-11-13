import { Nav, Logo, Version } from "./Navbar.styles";
import logo from "../../assets/img/newlogo.png";
const Navbar = () => {
  return (
    <Nav>
      <Logo src={logo} />
      <Version>Version: 1.00</Version>
    </Nav>
  );
};

export default Navbar;
