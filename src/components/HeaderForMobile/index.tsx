import useCheckScroll from "../hooks/useCheckScroll";
import {
  StyledHeader,
  TitleContainer,
  LeftTitleLine,
  RightTitleLine,
  MiddleBlankLine,
  StyledLine,
  HamburgerMenu
} from "./styles";
import { content } from "../../content";

const HeaderForMobile = () => {
  const { scrollOnFirstScreen } = useCheckScroll();
  const { title } = content.header;

  return (
    <StyledHeader scrollOnFirstScreen={scrollOnFirstScreen}>
      <TitleContainer>
        <LeftTitleLine scrollOnFirstScreen={scrollOnFirstScreen}/>
        {
          scrollOnFirstScreen ?
            <h2>{title}</h2>
            :
            <h1>{title}</h1>
        }
        <RightTitleLine scrollOnFirstScreen={scrollOnFirstScreen}/>
        {
          !scrollOnFirstScreen &&
            <HamburgerMenu>
              <div />
              <div />
              <div />
            </HamburgerMenu>

        }
      </TitleContainer>
      <MiddleBlankLine scrollOnFirstScreen={scrollOnFirstScreen}/>
      <StyledLine scrollOnFirstScreen={scrollOnFirstScreen}>
        {
          scrollOnFirstScreen ?
             <>
               <div className="left-box"/>
               <span className="phone-number">+48 537 522 788</span>
               <HamburgerMenu>
                 <div />
                 <div />
                 <div />
               </HamburgerMenu>
             </>
            :
            null
        }
      </StyledLine>
    </StyledHeader>
  );
};

export default HeaderForMobile;
