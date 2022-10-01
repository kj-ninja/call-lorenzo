import { content } from "../../content";
import { Container } from "../../styles/styled/Container";
import {
  StyledWhenWeWork,
  ImageContainer
} from "./styles";

const WhenWeWork = () => {
  const {sectionTexts } = content.whenWeWork;
  const { navigation } = content.header;

  return (
    <Container>
      <StyledWhenWeWork id={navigation[1]}>
        <h2>{sectionTexts.title}</h2>
        <div className="container">
          <div className="container__first-tile">
            {sectionTexts.coreHours}
          </div>
          <ImageContainer />
          <div className="container__second-tile">
            <span className='tile-description'>{sectionTexts.description} </span>
            <span className='tile-description tile-margin'>{sectionTexts.description2} <span className='tile-hours'>{sectionTexts.additionalHours}</span></span>
          </div>
        </div>
      </StyledWhenWeWork>
    </Container>
  )
}

export default WhenWeWork;
