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
  const [checked, setChecked] = useState(false);
  const { scrollOnFirstScreen } = useCheckScroll();
  const { title, navigation, phoneNumber } = content.header;

  useDisableScroll(isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setChecked(!checked)
  }

  const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0 });
  }

  return (
    <StyledHeader scrollOnFirstScreen={scrollOnFirstScreen}>
      <TitleContainer>
        <LeftTitleLine scrollOnFirstScreen={scrollOnFirstScreen}/>
        {
          scrollOnFirstScreen ?
            <h2 onClick={scrollToTop}>{title}</h2>
            :
            <h1 onClick={scrollToTop}>{title}</h1>
        }
        <RightTitleLine scrollOnFirstScreen={scrollOnFirstScreen}/>
        {
          !scrollOnFirstScreen &&
          <HamburgerMenu>
            <input id="menu-toggle" type="checkbox" onClick={toggleMenu} />
            <label className='menu-button-container' htmlFor="menu-toggle">
              <div className='menu-button'></div>
            </label>
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
               <HamburgerMenu>
               <input id="menu-toggle" type="checkbox" onClick={toggleMenu} checked={checked}
                      onChange={(e: any) => setChecked(e.target.checked)}
               />
               <label className='menu-button-container' htmlFor="menu-toggle">
                 <div className='menu-button'></div>
               </label>
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
