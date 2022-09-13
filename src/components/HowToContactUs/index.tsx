import { content } from "../../content";
import {
  StyledHowToContactUs,
  ImageWrapper,
  TelephoneImage,
  SmsImage,
  ImportantNotes
} from "./styles";
import telephone from "../../assets/telephone.svg";
import sms from "../../assets/sms.svg";

const WhenWeWork = () => {
  const { texts } = content.HowToContactUs;

  return (
    <StyledHowToContactUs>
      <h2>{texts.title}</h2>
      <div className="container">
        <div className="container__first-tile">
          <span className="first-tile__text">{texts.firstContactUsTile}</span>
        </div>
        <ImageWrapper>
          <TelephoneImage src={telephone} alt=""/>
          <SmsImage src={sms} alt=""/>
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
  )
}

export default WhenWeWork;
