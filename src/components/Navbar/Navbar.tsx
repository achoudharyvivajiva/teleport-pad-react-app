import { Nav, Logo, Version } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <Logo src="./src/assets/img/newlogo.png" />
      <Version>Version: 1.00</Version>
    </Nav>
  );
};

export default Navbar;
