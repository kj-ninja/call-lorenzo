import { useState } from "react";
import useCheckScroll from "../hooks/useCheckScroll";
import useDisableScroll from "../hooks/useDisableScroll";
import Navbar from "../Navbar";
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

const HeaderForMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scrollOnFirstScreen } = useCheckScroll();
  const { title, navigation, phoneNumber } = content.header;

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
               <span className="phone-number">{phoneNumber}</span>
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
