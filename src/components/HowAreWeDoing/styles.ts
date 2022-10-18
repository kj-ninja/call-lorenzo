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

const desktopMoveCarParty = keyframes`
  0% {
    transform: translate(300px);
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
    font-weight: bold;
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
    border-radius: ${props => props.theme.tileBorder.rightBorders};
  }
  
  .number-2, .number-4 {
    border-radius: ${props => props.theme.tileBorder.leftBorders};
  }
  
  .auto-party-icon {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    @media only screen and ${IDevice.desktopXS} {
      max-width: unset;
    }

    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(${leftCar});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 220px;
      left: 25px;
      animation: ${moveCarParty} 1s ease;
      animation-iteration-count: 1;

      @media only screen and ${IDevice.desktopXS} {
        left: 5px;
        animation: ${desktopMoveCarParty} 1s ease;
        animation-iteration-count: 1;
      }
    }

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(${party});
      background-repeat: no-repeat;
      background-size: 260px;
      background-position: center;
      left: -50px;
      bottom: 5px;

      @media only screen and ${IDevice.desktopXS} {
        left: -70px;
      }
    }
  }

  .glass-icon {
    width: 100%;
    height: 120%;
    position: relative;
    background-image: url(${rightGlass});
    background-repeat: no-repeat;
    background-position-y: 45%;
    background-position-x: 50%;
    background-size: 165%;
    right: -20px;
    top: -13px;
    overflow: hidden;

    @media only screen and ${IDevice.tablet} {
      background-size: 75%;
      right: -20px;
      top: 0;
    }

    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(${leftGlass});
      background-repeat: no-repeat;
      background-position-y: 45%;
      background-position-x: 50%;
      background-size: 165%;
      top: 0;
      right: 17px;
      animation: ${moveGlass} 1.9s linear;
      animation-iteration-count: 1;
      animation-delay: 0.4s;
      animation-fill-mode: forwards;
      visibility: hidden;

      @media only screen and ${IDevice.tablet} {
        background-size: 75%;
        right: 19px;
        animation: ${desktopMoveGlass} 1.2s linear;
        animation-delay: 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(${sound});
      background-repeat: no-repeat;
      background-position-y: 40%;
      background-position-x: 50%;
      background-size: 170%;
      right: 9px;
      bottom: 12px;
      animation: ${soundAnimation} 1s linear;
      animation-iteration-count: 1;
      animation-delay: 1.7s;
      animation-fill-mode: forwards;
      visibility: hidden;

      @media only screen and ${IDevice.tablet} {
        background-size: 75%;
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
      content: "";
      width: 300%;
      height: 330%;
      bottom: -130px;
      left: -50px;
      position: absolute;
      background-image: url(${calling});
      background-repeat: no-repeat;
      background-size: 70%;
      background-position-y: 40%;
      background-position-x: -50%;
      animation: ${shake} 0.5s;
      animation-iteration-count: 1.5;
      animation-delay: 1.9s;

      @media only screen and ${IDevice.tablet} {
        left: -33px;
        background-size: 30%;
        background-position-y: 40%;
        background-position-x: -1%;
      }

      @media only screen and ${IDevice.desktopXS} {
        left: 12px;
        background-position-x: -7%;
      }
    }
  }

  .auto-home-icon {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(${home});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 260px;
      right: -65px;

      @media only screen and ${IDevice.tablet} {
        right: -65px;
      }

      @media only screen and ${IDevice.desktopXS} {
        right: -40px;
      }
    }

    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(${rightCar});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 121px;
      right: 21px;
      top: 9px;
      animation: ${moveCarHome} 1s ease;
      animation-delay: 2.4s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      visibility: hidden;

      @media only screen and ${IDevice.tablet} {
        right: 18px;
      }

      @media only screen and ${IDevice.desktopXS} {
        right: 44px;
      }
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
    font-weight: bold;
    
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
    font-weight: 400;

    @media only screen and ${IDevice.desktopXS} {
      width: 270px;
    }
  }
  
  .footer-bold-text {
    font-weight: bold;
  }
`
