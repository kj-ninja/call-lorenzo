import { useContext } from "react";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import { Container } from "../../styles/styled/Container";
import {
  StyledWhenWeWork,
  ImageContainer
} from "./styles";

const WhenWeWork = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <StyledWhenWeWork id={dictionaryList[language].header.navigation[1]}>
        <h2>{dictionaryList[language].whenWeWork.sectionTexts.title}</h2>
        <div className="container">
          <div className="container__first-tile">
            {dictionaryList[language].whenWeWork.sectionTexts.coreHours}
          </div>
          <ImageContainer />
          <div className="container__second-tile">
            <span className='tile-description'>{dictionaryList[language].whenWeWork.sectionTexts.description} </span>
            <span
              className='tile-description tile-margin'>{dictionaryList[language].whenWeWork.sectionTexts.description2}
              <span className='tile-hours'>{dictionaryList[language].whenWeWork.sectionTexts.additionalHours}</span>
            </span>
          </div>
        </div>
      </StyledWhenWeWork>
    </Container>
  )
}

export default WhenWeWork;
