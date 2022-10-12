import { useContext } from "react";
import useCheckScroll from "../hooks/useCheckScroll";

import {
  FooterWrapper,
  UpperLine,
  LowerLine,
} from "./styles";
import useDeviceDetect from "../hooks/useDeviceDetect";
import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

const Footer = () => {
  const { isMobile } = useDeviceDetect(); // only for version 2.0 condition without sticky desktop header
  const { scrollOnFirstScreen } = useCheckScroll();
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguage = () => {
    if (language !== "pl") {
      setLanguage("pl")
    } else {
      setLanguage("en")
    }
  }

  return (
    <FooterWrapper scrollOnFirstScreen={scrollOnFirstScreen}>
      <UpperLine scrollOnFirstScreen={scrollOnFirstScreen}>
       <span className="phone-number">{(!scrollOnFirstScreen && dictionaryList[language].header.phoneNumber) || (!isMobile && dictionaryList[language].header.phoneNumber)}</span>
      </UpperLine>
      <LowerLine>
        <div className="flag-container">
          <div className="brittany-flag" onClick={handleLanguage} ></div>
          <div className="poland-flag" onClick={handleLanguage} ></div>
        </div>
      </LowerLine>
    </FooterWrapper>
  )
}

export default Footer;
