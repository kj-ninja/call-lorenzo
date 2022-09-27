import { Fragment } from "react";
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
  const { bar } = useCheckScroll();
  const { title } = content.header;

  return (
    <StyledHeader>
      <TitleContainer>
        <LeftTitleLine bar={bar}/>
        {
          bar ?
            <h2>{title}</h2>
            :
            <h1>{title}</h1>
        }
        <RightTitleLine bar={bar}/>
        {
          !bar ?
            <HamburgerMenu>
              <div />
              <div />
              <div />
            </HamburgerMenu>
            :
            null
        }
      </TitleContainer>
      <MiddleBlankLine bar={bar}/>
      <StyledLine bar={bar}>
        {
          bar ?
             <Fragment>
               <div className="left-box"/>
               <span className="phone-number">+48 537 522 788</span>
               <HamburgerMenu>
                 <div />
                 <div />
                 <div />
               </HamburgerMenu>
             </Fragment>
            :
            null
        }
      </StyledLine>
    </StyledHeader>
  );
};

export default HeaderForMobile;
