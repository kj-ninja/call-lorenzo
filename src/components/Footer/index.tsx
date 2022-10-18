import { useContext } from "react";

import useCheckScroll from "../hooks/useCheckScroll";
import useDeviceDetect from "../hooks/useDeviceDetect";

import {
  FooterWrapper,
  UpperLine,
  LowerLine,
} from "./styles";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

const Footer = () => {
  const { isMobile } = useDeviceDetect(); // only for version 2.0 condition without sticky desktop header
  const { scrollOnFirstScreen } = useCheckScroll();
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleToEng = () => {
    setLanguage("en")
  }

  const toggleToPl = () => {
    setLanguage("pl")
  }

  return (
    <FooterWrapper scrollOnFirstScreen={scrollOnFirstScreen}>
      <UpperLine scrollOnFirstScreen={scrollOnFirstScreen}>
        {!scrollOnFirstScreen &&
          <a
          className="phone-number"
          href={`tel:${dictionaryList[language as keyof typeof dictionaryList].header.phoneNumber}`}
        >
          {dictionaryList[language as keyof typeof dictionaryList].header.phoneNumber}
        </a>
        }
        {!isMobile &&
        <span className="phone-number">
         {dictionaryList[language as keyof typeof dictionaryList].header.phoneNumber}
        </span>
        }
      </UpperLine>
      <LowerLine>
        <div className="author-wrapper">
          <span>Created by:</span>
          <a href="https://github.com/JaCoWymowny" rel="noreferrer" target="_blank" className="github-link">Jacek
            Mickiewicz</a>
        </div>
        <div className="flag-container">
          <div className="brittany-flag" onClick={toggleToEng}></div>
          <div className="poland-flag" onClick={toggleToPl}></div>
        </div>
      </LowerLine>
    </FooterWrapper>
  )
}

export default Footer;
