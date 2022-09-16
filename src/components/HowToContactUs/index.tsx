import { content } from "../../content";
import { Container } from "../../styles/styled/Container";
import {
  StyledHowToContactUs,
  ImageWrapper,
  TelephoneImage,
  SmsImage,
  ImportantNotes
} from "./styles";
import phone from "../../assets/phone.svg";
import message from "../../assets/message.svg";


const HowToContactUs = () => {
  const { texts } = content.HowToContactUs;

  return (
    <Container>
      <StyledHowToContactUs>
        <h2>{texts.title}</h2>
        <div className="container">
          <div className="container__first-tile">
            <span className="first-tile__text">{texts.firstContactUsTile}</span>
          </div>
          <ImageWrapper>
            <TelephoneImage src={phone} alt=""/>
            <SmsImage src={message} alt=""/>
          </ImageWrapper>
          <div className="container__second-tile">
            {texts.secondContactUsTile}
          </div>
          <ImportantNotes>
          <span>
            {texts.firstImportantText}
            <span className="notes-text-style">
              {texts.firstBoldText}
            </span>
            <span>
              {texts.secondImportantText}
            </span>
            <span className="notes-text-style">{texts.secondBoldText}</span>
          </span>
          </ImportantNotes>
        </div>
      </StyledHowToContactUs>
    </Container>

  )
}

export default HowToContactUs;
