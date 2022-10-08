import useCheckScroll from "../hooks/useCheckScroll";

import {
  FooterWrapper,
  UpperLine,
  LowerLine,
} from "./styles";
import { content } from "../../content";
import useDeviceDetect from "../hooks/useDeviceDetect";

const Footer = () => {
  const { phoneNumber } = content.header;
  const { isMobile } = useDeviceDetect();
  const { scrollOnFirstScreen } = useCheckScroll();

  return (
    <FooterWrapper className="aa" scrollOnFirstScreen={scrollOnFirstScreen}>
      <UpperLine scrollOnFirstScreen={scrollOnFirstScreen}>
       <span className="phone-number">{!scrollOnFirstScreen && phoneNumber || !isMobile && phoneNumber}</span>
      </UpperLine>
      <LowerLine>
        <div className="flag-container">
          <div className="brittany-flag"/>
          <div className="poland-flag"/>
        </div>
      </LowerLine>
    </FooterWrapper>
  )
}

export default Footer;
