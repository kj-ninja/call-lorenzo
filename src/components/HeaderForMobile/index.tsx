import { useState, useContext } from "react";

import useCheckScroll from "../hooks/useCheckScroll";
import useDisableScroll from "../hooks/useDisableScroll";

import Navbar from "../Navbar";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import {
  HeaderWrapper,
  StyledHeader,
  TitleContainer,
  LeftTitleLine,
  RightTitleLine,
  MiddleBlankLine,
  StyledLine,
  HamburgerMenu
} from "./styles";


const HeaderForMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const { scrollOnFirstScreen, scrollBack } = useCheckScroll();
  const { language } = useContext(LanguageContext);

  useDisableScroll(isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setChecked(!checked)
  }

  const scrollToTop = () => {
    setChecked(false);
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0 });
  }

  return (
    <HeaderWrapper scrollOnFirstScreen={scrollOnFirstScreen}>
      <StyledHeader className={`${scrollOnFirstScreen ? "sticky" : ""}`} scrollOnFirstScreen={scrollOnFirstScreen}>
        <TitleContainer scrollBack={scrollBack}>
          <LeftTitleLine scrollOnFirstScreen={scrollOnFirstScreen}/>
          <h2 onClick={scrollToTop}>{dictionaryList[language as keyof typeof dictionaryList].header.title}</h2>
          <RightTitleLine scrollOnFirstScreen={scrollOnFirstScreen}/>
        </TitleContainer>
        <MiddleBlankLine scrollOnFirstScreen={scrollOnFirstScreen}/>
        <StyledLine scrollOnFirstScreen={scrollOnFirstScreen} scrollBack={scrollBack}>
          <>
            <div className="left-box"/>
              <a
              className="phone-number"
              href={`tel:${dictionaryList[language as keyof typeof dictionaryList].header.phoneNumber}`}
              >
                {dictionaryList[language as keyof typeof dictionaryList].header.phoneNumber}
            </a>
            <HamburgerMenu>
              <input id="menu-toggle" type="checkbox" onClick={toggleMenu} checked={checked}
                     onChange={(e: any) => setChecked(e.target.checked)}
              />
              <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
              </label>
            </HamburgerMenu>
          </>
        </StyledLine>
        <Navbar navigation={dictionaryList[language as keyof typeof dictionaryList].header.navigation}
                setToggleMenu={toggleMenu} toggleMenu={isOpen}/>
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default HeaderForMobile;
