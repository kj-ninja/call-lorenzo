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
    transform: translate(300px);
  }
  
  100% {
    transform: translate(-550px);
  }
`;

const moveCarHome = keyframes`
  0% {
    transform: translate(2000px);
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

export const StyledHowAreWeDoing = styled.section`
  h2 {
    text-align: center;
  }
  .tiles-container {
    height: calc(100vh - 180px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  
  .null {
    padding: 10px;
  }
  
  .auto-party-icon {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
    &:before {
      z-index: 1;
      content: url(${leftCar});
      position: absolute;
      top: 25%;
      right: 5%;
      animation: ${moveCarParty} 3s ease;
      animation-iteration-count: 1;

      @media only screen and ${IDevice.desktopXS} {
        animation: ${desktopMoveCarParty} 3s ease;
        animation-iteration-count: 1;
      }
    }

    &:after {
      z-index: 10;
      content: url(${party});
      position: absolute;
      top: 1%;
      left: 0;
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
      right: 32%;
      animation: ${shake} 0.5s;
      animation-iteration-count: 5;
      animation-delay: 5.5s;
    }
  }
  
  .glass-icon {
    background-image: url(${rightGlass});
    position: relative;
    width: 100%;
    height: 140%;
    background-repeat: no-repeat;
    background-position: 82% 10%;
    overflow: hidden;
    
    &:before {
      content: url(${leftGlass});
      position: absolute;
      bottom: 35%;
      right: 29%;
      animation: ${moveGlass} 5s linear;
      animation-iteration-count: 1;
    }

    &:after {
      content: url(${sound});
      position: absolute;
      bottom: 73%;
      left: 41%;
      animation: ${soundAnimation} 4.5s linear;
      animation-iteration-count: 1;
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
      right: 59%;
    }
    
    &:before {
      content: url(${leftCar});
      position: absolute;
      top: 30%;
      left: 22%;
      animation: ${moveCarHome} 12s ease;
      animation-iteration-count: 1;
    }
  }
`;

export const StyledTile = styled.div<ITileProps>`
  height: ${(props) => (
    props.tile.description ?
            '85px' : '85px'
  )};
  width: 50%;
  background-color: ${(props) => (
    props.tile.description ? 
            props.theme.colors.secondaryColor :
            props.theme.colors.white
  )};
  display: flex;
  align-items: center;
  text-align: center;
`;


