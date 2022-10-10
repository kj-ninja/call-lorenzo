import { content } from "../../content";
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
  const {
    title,
    source
  } = content.WhoWeAre.shortTexts;

  const {
    colorTextSentences,
    standardText
  } = content.WhoWeAre.firstTextContainer;

  const {
    colorText,
    firstStandardText,
    firstBoldText,
    secondStandardText,
    secondBoldText,
    thirdStandardText,
    thirdBoldText
  } = content.WhoWeAre.secondTextContainer;

  return (
    <Container>
      <StyledWhoWeAre>
        <h2>{title}</h2>
        <div className='content-container'>
          <div className="first-paragraph">
            <div className="first-paragraph__coloured">{colorTextSentences}</div>
            <div>{standardText}</div>
          </div>
          <div className='second-paragraph'>
            <span className='second-paragraph__coloured'>{colorText}</span>
            <span>{firstStandardText}</span>
            <span className='second-paragraph__bold-text'>{firstBoldText}</span>
            <span>{secondStandardText}</span>
            <span className='second-paragraph__bold-text'>{secondBoldText}</span>
            <span>{thirdStandardText}</span>
            <span className='second-paragraph__bold-text'>{thirdBoldText}</span>
          </div>
          <ImageContainer>
            <Image />
            <span className="source">{source}</span>
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
