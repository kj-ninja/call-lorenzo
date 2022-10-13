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
      <StyledWhoWeAre id={dictionaryList[language].header.navigation[4]}>
        <h2>{dictionaryList[language].WhoWeAre.shortTexts.title}</h2>
        <div className='content-container'>
          <div className="first-paragraph">
            <div className="first-paragraph__coloured">{dictionaryList[language].WhoWeAre.firstTextContainer.colorTextSentences}</div>
            <div>{dictionaryList[language].WhoWeAre.firstTextContainer.standardText}</div>
          </div>
          <div className='second-paragraph'>
            <span className='second-paragraph__coloured'>{dictionaryList[language].WhoWeAre.secondTextContainer.colorText}</span>
            <span>{dictionaryList[language].WhoWeAre.secondTextContainer.firstStandardText}</span>
            <span className='second-paragraph__bold-text'>{dictionaryList[language].WhoWeAre.secondTextContainer.firstBoldText}</span>
            <span>{dictionaryList[language].WhoWeAre.secondTextContainer.secondStandardText}</span>
            <span className='second-paragraph__bold-text'>{dictionaryList[language].WhoWeAre.secondTextContainer.secondBoldText}</span>
            <span>{dictionaryList[language].WhoWeAre.secondTextContainer.thirdStandardText}</span>
            <span className='second-paragraph__bold-text'>{dictionaryList[language].WhoWeAre.secondTextContainer.thirdBoldText}</span>
          </div>
          <ImageContainer>
            <Image />
            <span className="source">{dictionaryList[language].WhoWeAre.shortTexts.source}</span>
          </ImageContainer>
          <GraphicsContainer>
            <Graphic src={nmk} alt=""/>
            <Graphic src={ford} alt=""/>
          </GraphicsContainer>
        </div>
      </StyledWhoWeAre>
    </Container>
  );
};

export default WhoWeAre;
