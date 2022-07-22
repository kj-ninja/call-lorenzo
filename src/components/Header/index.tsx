import Navbar from "../Navbar";
import StyledHeader from "./styles";
import {header} from "../../content";

const Header = () => {
  const {title, navigation} = header;

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Navbar navigation={navigation} />
    </StyledHeader>
  );
};

export default Header;