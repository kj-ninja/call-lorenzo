import styled, { keyframes } from "styled-components";
import { ITile } from "../../types";
import party from "../../assets/party-sign.svg";
import leftCar from "../../assets/car-left.svg";
import leftGlass from "../../assets/left-glass.svg";
import rightGlass from "../../assets/right-glass.svg";
import sound from "../../assets/sound.svg";
import calling from "../../assets/calling.svg";
import rightCar from "../../assets/car-right.svg";
import home from "../../assets/home-sign.svg";
import { IDevice } from "../../settings/media";

type ITileProps = {
  tile: ITile;
}

type ILanguageProps = {
  language: string;
}

type IScrollCheckProps = {
  scrollOnFirstScreen: boolean;
}

const moveCarParty = keyframes`
  0% {
    transform: translate(200px);
  }
  100% {
    transform: translate(0);
  }
`;

const moveCarHome = keyframes`
  0% {
    transform: translate(-200px);
    visibility: hidden;
  }
  5% {
    visibility: visible;
  }
  100% {
    transform: translate(0);
    visibility: visible;
  }
`;

const moveGlass = keyframes`
  0% {
    transform: translate(-240px);
    visibility: hidden;
  }
  5% {
    visibility: visible;
  }
  70% {
    transform: translate(3px);
    visibility: visible;
  }
  100% {
    transform: translate(-1px);
    visibility: visible;
  }
`;

const desktopMoveGlass = keyframes`
  0% {
    transform: translate(-200px);
    visibility: hidden;
  }
  5% {
    visibility: visible;
  }
  75% {
    transform: translate(5px);
    visibility: visible;
  }
  100% {
    transform: translate(0);
    visibility: visible;
  }
`;

const soundAnimation = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  25% {
    visibility: visible;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

const desktopSoundAnimation = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  25% {
    visibility: visible;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

const shake = keyframes`
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`;

export const StyledHowAreWeDoing = styled.section<IScrollCheckProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => (
          props.scrollOnFirstScreen ? "100px 0 20px 0" : "100px 0 0 0"
  )};
  line-height: ${(props) => (props.theme.additionalStyles.lineHeight)};

  h2 {
    text-align: center;
    margin-bottom: 40px;
    
  }

  .tiles-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .null {
    padding: 16px 10px;
  }


  .number-1, .number-3 {
    border-radius: 0 10px 10px 0;
  }
  
  .number-2, .number-4 {
    border-radius: 10px 0 0 10px;
  }
  
  .auto-party-icon {
    width: 100%;
    height: 100%;
    position: relative;
    top: 15%;
    overflow: hidden;

    @media only screen and ${IDevice.desktopXS} {
      max-width: unset;
    }

    &:before {
      content: url(${leftCar});
      width: 120px;
      height: 50px;
      position: absolute;
      top: 13%;
      left: 40px;
      right: 0;
      animation: ${moveCarParty} 1s ease;
      animation-iteration-count: 1;
      margin-left: auto;
      margin-right: auto;
    }

    &:after {
      content: url(${party});
      width: 60px;
      height: 65px;
      position: absolute;
      left: 0;
      right: 120px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  .right-glass-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    position: relative;
    
    &:before {
      content: url(${rightGlass});
      position: absolute;
      width: 40px;
      height: 55px;
      right: 0;
      left: 75px;
      top: 20px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .glass-icon {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
    margin-bottom: 40px;

    &:before {
      content: url(${leftGlass});
      width: 42px;
      height: 55px;
      top: 10px;
      right: 0;
      left: 0;
      margin-left: auto;
      margin-right: auto;
      position: absolute;
      animation: ${moveGlass} 1.9s linear;
      animation-iteration-count: 1;
      animation-delay: 0.4s;
      animation-fill-mode: forwards;
      visibility: hidden;

      @media only screen and ${IDevice.tablet} {
        animation: ${desktopMoveGlass} 1.2s linear;
        animation-delay: 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
    }

    &:after {
      content: url(${sound});
      position: absolute;
      width: 20px;
      height: 20px;
      right: 0;
      left: 45px;
      margin-left: auto;
      margin-right: auto;
      animation: ${soundAnimation} 1s linear;
      animation-iteration-count: 1;
      animation-delay: 1.7s;
      animation-fill-mode: forwards;
      visibility: hidden;

      @media only screen and ${IDevice.tablet} {
        animation: ${desktopSoundAnimation} 1s linear;
        animation-iteration-count: 1;
        animation-delay: 1.3s;
        animation-fill-mode: forwards;
      }
    }
  }

  .telefon-icon {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    &:before {
      content: url(${calling});
      width: 70px;
      height: 66px;
      position: absolute;
      right: 0;
      left: 0;
      top: 10px;
      bottom: 0;
      margin-left: auto;
      margin-right: auto;
      animation: ${shake} 0.5s;
      animation-iteration-count: 1.5;
      animation-delay: 1.9s;

      @media only screen and ${IDevice.tablet} {
      }

      @media only screen and ${IDevice.desktopXS} {
      }
    }
  }

  .auto-home-icon {
    width: 100%;
    height: 100%;
    top: 20%;
    position: relative;
    overflow: hidden;

    &:after {
      content: url(${home});
      width: 60px;
      height: 65px;
      position: absolute;
      right: 0;
      left: 120px;
      margin-left: auto;
      margin-right: auto;
    }

    &:before {
      content: url(${rightCar});
      width: 120px;
      height: 50px;
      position: absolute;
      top: 15px;
      right: 40px;
      left: 0;
      margin-left: auto;
      margin-right: auto;
      animation: ${moveCarHome} 1s ease;
      animation-delay: 2.4s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      visibility: hidden;
    }
  }
`;

export const StyledTile = styled.div<ITileProps>`
  height: 90px;
  margin-bottom: 50px;
  width: 50%;
  background-color: ${(props) => (
          props.tile.description ?
                  props.theme.colors.secondaryColor :
                  props.theme.colors.white
  )};
  display: flex;
  align-items: center;

  .tile-order {
    display: flex;
    align-self: center;
    font-weight: bold;
    font-size: 24px;
    padding-left: 16px;

    @media only screen and ${IDevice.desktopXS} {
      align-self: center;
    }
  }

  .tile-description {
    display: flex;
    align-self: center;
    text-align: left;
    margin-left: 8px;
    font-size: 15px;
    
    @media only screen and ${IDevice.desktopXS} {
      font-size: 16px;
    }

    @media only screen and ${IDevice.desktopXS} {
      align-self: center;
    }
  }
`

export const SectionFooter = styled.div<ILanguageProps>`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  color: ${props => (props.theme.colors.additionalTextColor)};

  @media only screen and ${IDevice.tablet} {
    width: 45%;
  }

  @media only screen and ${IDevice.desktopXS} {
    width: 37%;
  }
  
  .horizontal-line {
    background-color: ${props => (props.theme.colors.additionalTextColor)};
    height: 2px;
    width: 40px;
  }
  
  .footer-texts {
    display:${props => (props.language === "en") ? "flex" : "block"};
    flex-direction:${props => (props.language === "en") ? "column" : "unset"} ;
    align-items:${props => (props.language === "en") ? "center" : "unset"};
  }
  
  .footer-bold-text {
    font-weight: bold;
  }
`
