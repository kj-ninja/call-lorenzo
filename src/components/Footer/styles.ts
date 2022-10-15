import styled, { keyframes } from "styled-components";
import ukFlag from "../../assets/ukFlag.svg";
import plFlag from "../../assets/plFlag.svg";
import { IDevice } from "../../settings/media";

type IScrollCheckProps = {
  scrollOnFirstScreen: boolean;
}

const fadeinAndOut = keyframes`
  0% {
  opacity: 1;
  transform: translateY(0px);
  }
  25% {
    opacity: 0;
    transform: translateY(100px);
  }
  75% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const FooterWrapper = styled.div<IScrollCheckProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
  background-color: white;
  width: 100%;
  max-height: 80px;
  bottom: 0;
  animation: ${props => (props.scrollOnFirstScreen && fadeinAndOut)} 0.5s;
  animation-fill-mode: forwards;

  @media only screen and ${IDevice.desktopXS} {
    justify-content: center;
    position: relative;
  }
`

export const UpperLine = styled.div<IScrollCheckProps>`
  height: ${props => (props.scrollOnFirstScreen ? "19px" : "39px")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.3s linear;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.colors.primaryColor};

  @media only screen and ${IDevice.desktopXS} {
    //only for version 2.0 without sticky desktop header
    height: 39px;
  }
`;

export const LowerLine = styled.div`
  position: relative;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: white;

  @media only screen and ${IDevice.desktopXS} {
    //only for version 2.0 without sticky desktop header
    justify-content: center;
  }
  
  .author-wrapper {
    display: flex;
    align-items: center;
    width: 220px;
    height: 35px;
    padding-left: 10px;
    font-size: 12px;
  }
  
  .github-link {
    width: 100px;
    margin-left: 7px;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
  
  .github-link:hover {
    color: red;
  }
  
  .flag-container {
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
    width: 70px;
    height: 32px;

    @media only screen and ${IDevice.desktopXS} {
      width: 900px;
      justify-content: flex-end;
    }
  }
  
  .brittany-flag {
    width: 30px;
    height: 30px;
    background-image: url(${ukFlag});
    background-size: 180%;
    background-position: center;
    cursor: pointer;
  }
  
  .poland-flag {
    width: 30px;
    height: 30px;
    background-image: url(${plFlag});
    background-size: 180%;
    background-position: center 42px;
    cursor: pointer;

    @media only screen and ${IDevice.desktopXS} {
      margin-left: 10px;
    }
  }
`;
