import useCheckScroll from "../hooks/useCheckScroll";
import {
  StyledHeader,
  TitleContainer,
  LeftTitleLine,
  RightTitleLine,
  MiddleBlankLine,
  StyledLine,
  HamburgerMenu
} from "./styles";
import { content } from "../../content";
import { useState } from "react";
import Navbar from "../Navbar";
import useDisableScroll from "../hooks/useDisableScroll";

const HeaderForMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scrollOnFirstScreen } = useCheckScroll();
  const { title, navigation } = content.header;
  useDisableScroll(isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <StyledHeader scrollOnFirstScreen={scrollOnFirstScreen}>
      <TitleContainer>
        <LeftTitleLine scrollOnFirstScreen={scrollOnFirstScreen}/>
        {
          scrollOnFirstScreen ?
            <h2>{title}</h2>
            :
            <h1>{title}</h1>
        }
        <RightTitleLine scrollOnFirstScreen={scrollOnFirstScreen}/>
        {
          !scrollOnFirstScreen &&
            <HamburgerMenu onClick={toggleMenu}>
              <div />
              <div />
              <div />
            </HamburgerMenu>

        }
      </TitleContainer>
      <MiddleBlankLine scrollOnFirstScreen={scrollOnFirstScreen}/>
      <StyledLine scrollOnFirstScreen={scrollOnFirstScreen}>
        {
          scrollOnFirstScreen ?
             <>
               <div className="left-box"/>
               <span className="phone-number">+48 537 522 788</span>
               <HamburgerMenu onClick={toggleMenu}>
                 <div />
                 <div />
                 <div />
               </HamburgerMenu>
             </>
            :
            null
        }
      </StyledLine>
          <Navbar navigation={navigation} setToggleMenu={toggleMenu} toggleMenu={isOpen}/>
    </StyledHeader>
  );
};

export default HeaderForMobile;
