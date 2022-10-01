import { FC } from 'react';
import StyledNavbar from "./styles";
import useDeviceDetect from "../hooks/useDeviceDetect";
import useCheckScroll from "../hooks/useCheckScroll";

interface Props {
  navigation: string[];
  setToggleMenu?: () => void;
  toggleMenu?: boolean;
}

const Navbar: FC<Props> = ({navigation, setToggleMenu, toggleMenu}) => {
  const { isMobile } = useDeviceDetect();
  const { scrollOnFirstScreen } = useCheckScroll();

  return (
    <StyledNavbar toggleMenu={toggleMenu} isMobile={isMobile} scrollOnFirstScreen={scrollOnFirstScreen}>
      <ul className="nav-links" >
        {navigation.map(link => (
          <li key={link} onClick={setToggleMenu}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
