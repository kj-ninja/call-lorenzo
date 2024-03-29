import styled, { keyframes } from "styled-components";

type IScrollCheckProps = {
  scrollOnFirstScreen?: boolean;
  scrollBack?: boolean;
}

const fade = keyframes`
0% {
  top: -90px;
}
  
100% {
  top: 0;
}  
`

export const HeaderWrapper = styled.div<IScrollCheckProps>`
  .sticky {
    position: fixed;
    top: -90px;
    animation: ${fade} .33s;
    animation-fill-mode: forwards;
  }
`

export const StyledHeader = styled.header<IScrollCheckProps>`
  width: 100%;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 0;

  h2 {
    text-align: center;
    padding: 5px 0;
    letter-spacing: 1px;
    font-family: ${props => props.theme.fontFamily.logoFont};
  }
`;

export const TitleContainer = styled.div<IScrollCheckProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
  transition: height 0.1s linear;
`;

export const LeftTitleLine = styled.div<IScrollCheckProps>`
  width: 31%;
  height: 8px;
  background: white;
  margin-top: 3px;
`;

export const RightTitleLine = styled.div<IScrollCheckProps>`
  width: 31%;
  height: 8px;
  background: white;
  margin-top: 3px;
`;

export const StyledLine = styled.div<IScrollCheckProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  
  .left-box {
    width: 30px;
    margin-left: 20px;
  }
  
  .phone-number {
    font-weight: bold;
    padding-left: 5px;
    text-decoration: none;
    color: white;
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
  height: 3px;
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
