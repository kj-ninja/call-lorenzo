import { content } from "../../content";
import { StyledWhoWeAre, ImageContainer, GraphicsContainer, Image, Graphic } from "./styles";
import picture from "../../assets/group-final.jpeg";
import ford from "../../assets/ford.jpeg";
import nmk from "../../assets/nmk.jpeg"

const WhoWeAre = () => {
  const { title, source } = content.WhoWeAre.shortTexts;
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
          <Image src={picture} alt="" />
          <span className="source">{source}</span>
        </ImageContainer>
        <GraphicsContainer>
          <Graphic src={nmk} alt=""/>
          <Graphic src={ford} alt=""/>
        </GraphicsContainer>
      </div>
    </StyledWhoWeAre>
  );
};

export default WhoWeAre;
