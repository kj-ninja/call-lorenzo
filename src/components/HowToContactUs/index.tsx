import { useContext } from "react";

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
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <StyledHowToContactUs id={dictionaryList[language].header.navigation[3]}>
        <h2>{dictionaryList[language].HowToContactUs.texts.title}</h2>
        <div className="container">
          <div className="container__first-tile">
            <span className="first-tile__text">{dictionaryList[language].HowToContactUs.texts.firstContactUsTile}</span>
          </div>
          <ImageWrapper>
            <TelephoneImage src={phone} alt=""/>
            <SmsImage src={message} alt=""/>
          </ImageWrapper>
          <div className="container__second-tile">
            {dictionaryList[language].HowToContactUs.texts.secondContactUsTile}
          </div>
          <ImportantNotes>
          <span>
            {dictionaryList[language].HowToContactUs.texts.firstImportantText}
            <span className="notes-text-style">
              {dictionaryList[language].HowToContactUs.texts.firstBoldText}
            </span>
            <span>
              {dictionaryList[language].HowToContactUs.texts.secondImportantText}
            </span>
            <span className="notes-text-style">{dictionaryList[language].HowToContactUs.texts.secondBoldText}</span>
          </span>
          </ImportantNotes>
        </div>
      </StyledHowToContactUs>
    </Container>

  )
}

export default HowToContactUs;
