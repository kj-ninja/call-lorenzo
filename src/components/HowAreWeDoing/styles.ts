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
    transform: translate(280px);
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
    transform: translate(4px);
    visibility: visible;
  }
  100% {
    transform: translate(0);
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
    transform: translate(4px);
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

export const StyledHowAreWeDoing = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
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
      left: 35px;
      animation: ${moveCarParty} 1s ease;
      animation-iteration-count: 1;

      @media only screen and ${IDevice.desktopXS} {
        left: 135px;
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
      left: -20px;

      @media only screen and ${IDevice.desktopXS} {
        left: 80px;
      }
    }
  }

  .glass-icon {
    width: 100%;
    height: 120%;
    position: relative;
    background-image: url(${rightGlass});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150%;
    right: -20px;
    top: 0;
    overflow: hidden;

    @media only screen and ${IDevice.tablet} {
      background-size: 75%;
      right: -40px;
      top: 0;
    }

    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(${leftGlass});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 150%;
      top: 0;
      right: 17px;
      animation: ${moveGlass} 1s linear;
      animation-iteration-count: 1;
      animation-delay: 0.4s;
      animation-fill-mode: forwards;
      visibility: hidden;

      @media only screen and ${IDevice.tablet} {
        background-size: 75%;
        right: 19px;
        animation: ${desktopMoveGlass} 0.7s linear;
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
      background-position: center;
      background-size: 150%;
      right: 8px;
      animation: ${soundAnimation} 1s linear;
      animation-iteration-count: 1;
      animation-delay: 1s;
      animation-fill-mode: forwards;
      visibility: hidden;

      @media only screen and ${IDevice.tablet} {
        background-size: 75%;
        animation: ${desktopSoundAnimation} 1s linear;
        animation-iteration-count: 1;
        animation-delay: 0.9s;
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
      animation: ${shake} 0.5s;
      animation-iteration-count: 1.5;
      animation-delay: 1.5s;

      @media only screen and ${IDevice.tablet} {
        left: -33px;
      }

      @media only screen and ${IDevice.desktopXS} {
        left: 12px;
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
      right: -70px;

      @media only screen and ${IDevice.tablet} {
        right: -225px;
      }

      @media only screen and ${IDevice.desktopXS} {
        right: -200px;
      }
    }

    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(${rightCar});
      background-repeat: no-repeat;
      right: -45px;
      top: -4px;
      animation: ${moveCarHome} 1s ease;
      animation-delay: 2s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      visibility: hidden;

      @media only screen and ${IDevice.tablet} {
        right: -200px;
      }

      @media only screen and ${IDevice.desktopXS} {
        right: -175px;
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
    align-self: flex-start;
    font-weight: bold;
    font-size: 24px;

    @media only screen and ${IDevice.desktopXS} {
      align-self: center;
    }
  }

  .tile-description {
    display: flex;
    align-self: flex-start;
    text-align: left;
    margin-left: 10px;

    @media only screen and ${IDevice.desktopXS} {
      align-self: center;
    }
  }
`
