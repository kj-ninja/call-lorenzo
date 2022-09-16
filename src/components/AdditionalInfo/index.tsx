import { content } from "../../content";
import { Container } from "../../styles/styled/Container";
import { StyledAdditionalInfo } from "./styles";

const AdditionalInfo = () => {
  const {
    colouredWords,
    firstParagraph,
    colouredSentence,
    firstLineText,
    secondLineText,
    thirdLineText,
    fourthLineText,
    colouredParagraph
  } = content.AdditionalInfo.additionalTexts;

  return (
    <Container>
      <StyledAdditionalInfo>
        <div className="section-container">
          <div className="first-paragraph">
            <span className="first-paragraph__coloured">{colouredWords}</span>
            <span>{firstParagraph}</span>
          </div>
          <div className="second-paragraph">
            <span className="second-paragraph__coloured">{colouredSentence}</span>
            <span>{firstLineText}</span>
            <span>{secondLineText}</span>
            <span>{thirdLineText}</span>
            <span>{fourthLineText}</span>
          </div>
          <div className="third-paragraph">
            <p className="third-paragraph__coloured">{colouredParagraph}</p>
          </div>
        </div>
      </StyledAdditionalInfo>
    </Container>
  )
}

export default AdditionalInfo;
