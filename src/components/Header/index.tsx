import Navbar from "../Navbar";
import StyledHeader from "./styles";
import {content} from "../../content";

const Header = () => {
  const {title, navigation} = content.header;

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Navbar navigation={navigation} />
    </StyledHeader>
  );
};

export default Header;