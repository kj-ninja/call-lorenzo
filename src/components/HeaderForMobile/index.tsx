import { useContext } from "react";
import useCheckScroll from "../hooks/useCheckScroll";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import {
  StyledHeader,
  TitleContainer,
  LeftTitleLine,
  RightTitleLine,
  MiddleBlankLine,
  StyledLine,
  HamburgerMenu
} from "./styles";

const HeaderForMobile = () => {
  const { scrollOnFirstScreen } = useCheckScroll();
  const { language } = useContext(LanguageContext);

  return (
    <StyledHeader scrollOnFirstScreen={scrollOnFirstScreen}>
      <TitleContainer>
        <LeftTitleLine scrollOnFirstScreen={scrollOnFirstScreen}/>
        {
          scrollOnFirstScreen ?
            <h2>{dictionaryList[language].header.title}</h2>
            :
            <h1>{dictionaryList[language].header.title}</h1>
        }
        <RightTitleLine scrollOnFirstScreen={scrollOnFirstScreen}/>
        {
          !scrollOnFirstScreen &&
            <HamburgerMenu>
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
               <span className="phone-number">{dictionaryList[language].header.phoneNumber}</span>
               <HamburgerMenu>
                 <div />
                 <div />
                 <div />
               </HamburgerMenu>
             </>
            :
            null
        }
      </StyledLine>
    </StyledHeader>
  );
};

export default HeaderForMobile;
