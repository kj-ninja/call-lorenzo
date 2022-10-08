import styled from "styled-components";

type IScrollCheckProps = {
  scrollOnFirstScreen?: boolean;
  scrollBack?: boolean;
}

export const StyledHeader = styled.header<IScrollCheckProps>`
  width: 100%;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.white};
  position: ${(props) => (props.scrollOnFirstScreen ? "fixed" : "unset")};
  top: ${props => (props.scrollOnFirstScreen ? "0" : "-90px")};
  transition: ${(props) => (props.scrollOnFirstScreen && "0.5s top cubic-bezier(.3, .73, .3, .74)")};

  h1 {
    text-align: center;
    padding: 15px 0;
    letter-spacing: -1px;
  }

  h2 {
    text-align: center;
    padding: 5px 0;
    letter-spacing: -1px;
  }
`;

export const TitleContainer = styled.div<IScrollCheckProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => (props.scrollBack ? "67px" : "37px")};
  transition: height 0.1s linear;
`;

export const LeftTitleLine = styled.div<IScrollCheckProps>`
  width: ${(props) => (
    props.scrollOnFirstScreen ? "31%" : "25%"
  )};
  height: ${(props) => (
          props.scrollOnFirstScreen ? "8px" : "13px"
  )};
  background: white;
  margin-top: 3px;
`;

export const RightTitleLine = styled.div<IScrollCheckProps>`
  width: ${(props) => (
          props.scrollOnFirstScreen ? "31%" : "10%"
  )};
  height: ${(props) => (
          props.scrollOnFirstScreen ? "8px" : "13px"
  )};
  background: white;
  margin-top: 3px;
`;

export const StyledLine = styled.div<IScrollCheckProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (
          props.scrollOnFirstScreen ? "38px" : "15px"
  )};
  
  .left-box {
    width: 30px;
    margin-left: 20px;
  }
  
  .phone-number {
    font-weight: bold;
    padding-left: 5px;
  }
    
  .styled-line-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MiddleBlankLine = styled.div<IScrollCheckProps>`
  width: 100%;
  height: ${(props) => (
          props.scrollOnFirstScreen ? "3px" : "5px"
  )};
  background-color: white;
`

export const HamburgerMenu = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 15px 0 10px;
  
  .menu-button-container {
    display: flex;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: '';
    margin-top: -8px;
  }

  .menu-button::after {
    content: '';
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0;
    transform: rotate(-405deg);
  }
`
