import { useContext } from "react";

import useDeviceDetect from "../hooks/useDeviceDetect";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import phone from "../../assets/phone.svg";
import message from "../../assets/message.svg";

import { Container } from "../../styles/styled/Container";
import {
  StyledHowToContactUs,
  ImageWrapper,
  TelephoneImage,
  SmsImage,
  ImportantNotes
} from "./styles";

const HowToContactUs = () => {
  const { isMobile } = useDeviceDetect();
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <StyledHowToContactUs id={dictionaryList[language as keyof typeof dictionaryList].header.navigation[3]}>
        <h2>{dictionaryList[language as keyof typeof dictionaryList].HowToContactUs.texts.title}</h2>
        <div className="container">
          <div className="container__first-tile">
            { isMobile ?
              <a
                className="first-tile__text"
                href={`tel:${dictionaryList[language as keyof typeof dictionaryList].HowToContactUs.texts.firstContactUsTile}`}>
                {dictionaryList[language as keyof typeof dictionaryList].HowToContactUs.texts.firstContactUsTile}
              </a>
              :
              <span className="first-tile__text">{dictionaryList[language as keyof typeof dictionaryList].HowToContactUs.texts.firstContactUsTile}</span>}
          </div>
          <ImageWrapper>
            <TelephoneImage src={phone} alt=""/>
            <SmsImage src={message} alt=""/>
          </ImageWrapper>
          <div className="container__second-tile">
            {dictionaryList[language as keyof typeof dictionaryList].HowToContactUs.texts.secondContactUsTile}
          </div>
          <ImportantNotes>
          <span>
            {dictionaryList[language as keyof typeof dictionaryList].HowToContactUs.texts.firstImportantText}
            <span className="notes-text-style">
              {dictionaryList[language as keyof typeof dictionaryList].HowToContactUs.texts.firstBoldText}
            </span>
            <span>
              {dictionaryList[language as keyof typeof dictionaryList].HowToContactUs.texts.secondImportantText}
            </span>
            <span className="notes-text-style">{dictionaryList[language as keyof typeof dictionaryList].HowToContactUs.texts.secondBoldText}</span>
          </span>
          </ImportantNotes>
        </div>
      </StyledHowToContactUs>
    </Container>

  )
}

export default HowToContactUs;
