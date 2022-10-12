import styled, { keyframes } from "styled-components";
import {ITile} from "../../types";
import party from "../../assets/party-sign.jpeg";
import home from "../../assets/home-sign.jpeg";
import leftCar from "../../assets/car-left.jpeg";
import calling from "../../assets/calling.jpeg";
import leftGlass from "../../assets/left-glass.jpeg";
import sound from "../../assets/sound.jpeg";
import rightGlass from "../../assets/right-glass.jpeg";
import { IDevice } from "../../settings/media";

type ITileProps = {
  tile: ITile;
}

type IScrollCheckProps = {
  scrollOnFirstScreen: boolean;
}

const moveCarParty = keyframes`
  0% {
    transform: translate(160px);
  }
  100% {
    transform: translate(0);
  }
`;

const desktopMoveCarParty = keyframes`
  0% {
    transform: translate(320px);
  }
  100% {
    transform: translate(0);
  }
`;

const moveCarHome = keyframes`
  0% {
    transform: translate(1800px);
  }
  60% {
    transform: translate(1000px);
  }
  100% {
    transform: translate(0);
  }
`;

const desktopMoveCarHome = keyframes`
  0% {
    transform: translate(2000px);
  }
  15% {
    transform: translate(1500px);
  }
  75% {
    transform: translate(450px);
  }
  100% {
    transform: translate(0);
  }
`;

const moveGlass = keyframes`
  0% {
    transform: translate(-400px);
  }
  80% {
    transform: translate(3px);
  }
  100% {
    transform: translate(0);
  }
`;

const desktopMoveGlass = keyframes`
  0% {
    transform: translate(-550px);
  }
  80% {
    transform: translate(6px);
  }
  100% {
    transform: translate(0);
  }
`;

const soundAnimation = keyframes`
  0% {
    opacity: 0;
  }
  88% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

export const StyledHowAreWeDoing = styled.section<IScrollCheckProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => (
          props.scrollOnFirstScreen ? "127px 0 20px 0" : "20px 0 0 0"
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
    overflow: hidden;

    @media only screen and ${IDevice.desktopXS} {
      max-width: unset;
    }
    
    &:before {
      content: url(${leftCar});
      position: absolute;
      top: 25%;
      left: 45px;
      animation: ${moveCarParty} 3s ease;
      animation-iteration-count: 1;

      @media only screen and ${IDevice.desktopXS} {
        left: unset;
        right: 30%;
        animation: ${desktopMoveCarParty} 3s ease;
        animation-iteration-count: 1;
      }
    }

    &:after {
      content: url(${party});
      position: absolute;
      top: 1%;
      left: 0;

      @media only screen and ${IDevice.desktopXS} {
        left: 30%;
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
      position: absolute;
      top: 12%;
      left: 60px;
      animation: ${shake} 0.5s;
      animation-iteration-count: 5;
      animation-delay: 5.5s;

      @media only screen and ${IDevice.desktopXS} {
        top: 12%;
        left: unset;
        right: 52%;
        animation-iteration-count: 2;
      }
    }
  }
  
  .glass-icon {
    background-image: url(${rightGlass});
    position: relative;
    width: 100%;
    height: 140%;
    background-repeat: no-repeat;
    background-position: right 30px top 11%;
    overflow: hidden;

    @media only screen and ${IDevice.desktopXS} {
      background-position: 45% 11%;
    }
    
    &:before {
      content: url(${leftGlass});
      position: absolute;
      top: 0;
      right: 68px;
      animation: ${moveGlass} 5s linear;
      animation-iteration-count: 1;

      @media only screen and ${IDevice.desktopXS} {
        top: unset;
        bottom: 36%;
        right: 53%;
        animation: ${desktopMoveGlass} 6s linear;
      }
    }

    &:after {
      content: url(${sound});
      position: absolute;
      bottom: 73%;
      right: 61px;
      animation: ${soundAnimation} 4.5s linear;
      animation-iteration-count: 1;

      @media only screen and ${IDevice.desktopXS} {
        animation: ${soundAnimation} 5.5s linear;
        right: 51%;
      }
    }
  }
  
  .auto-home-icon {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
    &:after {
      content: url(${home});
      position: absolute;
      top: 1%;
      right: 111px;
      
      @media only screen and ${IDevice.desktopXS} {
        right: 59%;
      }
    }
    
    &:before {
      content: url(${leftCar});
      position: absolute;
      top: 30%;
      right: 10px;
      animation: ${moveCarHome} 10s ease;
      animation-iteration-count: 1;

      @media only screen and ${IDevice.desktopXS} {
        top: 30%;
        right: unset;
        left: 34%;
        animation: ${desktopMoveCarHome} 8s ease;
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
