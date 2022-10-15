import { useContext } from "react";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import { Container } from "../../styles/styled/Container";
import { StyledAdditionalInfo } from "./styles";

const AdditionalInfo = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <StyledAdditionalInfo>
        <div className="section-container">
          <div className="first-paragraph">
            <span className="first-paragraph__coloured">{dictionaryList[language as keyof typeof dictionaryList].AdditionalInfo.additionalTexts.colouredWords}</span>
            <span>{dictionaryList[language as keyof typeof dictionaryList].AdditionalInfo.additionalTexts.firstParagraph}</span>
          </div>
          <div className="second-paragraph">
            <span className="second-paragraph__coloured">{dictionaryList[language as keyof typeof dictionaryList].AdditionalInfo.additionalTexts.colouredSentence}</span>
            <span>{dictionaryList[language as keyof typeof dictionaryList].AdditionalInfo.additionalTexts.firstLineText}</span>
            <span>{dictionaryList[language as keyof typeof dictionaryList].AdditionalInfo.additionalTexts.secondLineText}</span>
            <span>{dictionaryList[language as keyof typeof dictionaryList].AdditionalInfo.additionalTexts.thirdLineText}</span>
            <span>{dictionaryList[language as keyof typeof dictionaryList].AdditionalInfo.additionalTexts.fourthLineText}</span>
          </div>
          <div className="third-paragraph">
            <p className="third-paragraph__coloured">{dictionaryList[language as keyof typeof dictionaryList].AdditionalInfo.additionalTexts.colouredParagraph}</p>
          </div>
        </div>
      </StyledAdditionalInfo>
    </Container>
  )
}

export default AdditionalInfo;
