import { useContext } from "react";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import ford from "../../assets/ford.jpeg";
import nmk from "../../assets/nmk.jpeg"

import { Container } from "../../styles/styled/Container";
import {
  StyledWhoWeAre,
  ImageContainer,
  GraphicsContainer,
  Image,
  Graphic
} from "./styles";

const WhoWeAre = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <StyledWhoWeAre id={dictionaryList[language as keyof typeof dictionaryList].header.navigation[4]}>
        <h2>{dictionaryList[language as keyof typeof dictionaryList].WhoWeAre.shortTexts.title}</h2>
        <div className="section-wrapper">
        <div className='content-container'>
          <div className="first-paragraph">
            <div className="first-paragraph__coloured">{dictionaryList[language as keyof typeof dictionaryList].WhoWeAre.firstTextContainer.colorTextSentences}</div>
            <div>{dictionaryList[language as keyof typeof dictionaryList].WhoWeAre.firstTextContainer.standardText}</div>
          </div>
          <div className='second-paragraph'>
            <span className='second-paragraph__coloured'>{dictionaryList[language as keyof typeof dictionaryList].WhoWeAre.secondTextContainer.colorText}</span>
            <span>{dictionaryList[language as keyof typeof dictionaryList].WhoWeAre.secondTextContainer.firstStandardText}</span>
            <span className='second-paragraph__bold-text'>{dictionaryList[language as keyof typeof dictionaryList].WhoWeAre.secondTextContainer.firstBoldText}</span>
            <span>{dictionaryList[language as keyof typeof dictionaryList].WhoWeAre.secondTextContainer.secondStandardText}</span>
            <span className='second-paragraph__bold-text'>{dictionaryList[language as keyof typeof dictionaryList].WhoWeAre.secondTextContainer.secondBoldText}</span>
            <span>{dictionaryList[language as keyof typeof dictionaryList].WhoWeAre.secondTextContainer.thirdStandardText}</span>
            <span className='second-paragraph__bold-text'>{dictionaryList[language as keyof typeof dictionaryList].WhoWeAre.secondTextContainer.thirdBoldText}</span>
          </div>
          <ImageContainer>
            <Image />
            <span className="source">{dictionaryList[language as keyof typeof dictionaryList].WhoWeAre.shortTexts.source}</span>
          </ImageContainer>
          <GraphicsContainer>
            <Graphic src={nmk} alt=""/>
            <Graphic src={ford} alt=""/>
          </GraphicsContainer>
        </div>
        </div>
      </StyledWhoWeAre>
    </Container>
  );
};

export default WhoWeAre;
