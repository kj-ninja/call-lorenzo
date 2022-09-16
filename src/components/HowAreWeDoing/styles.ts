import styled, { keyframes } from "styled-components";
import {ITile} from "../../types";
// import car from "../../assets/calling.jpeg";
// import calling from "../../assets/calling.jpeg";
import car from "../../assets/calling.svg";
import calling from "../../assets/calling.svg";
import leftGlass from "../../assets/left-glass.svg";
import sound from "../../assets/sound.svg";
import rightGlass from "../../assets/right-glass.svg";

type ITileProps = {
  tile: ITile;
}

const moveCar = keyframes`

  0% {
    transform: translate(121px);
  }
  
  100% {
    transform: translate(0);
  }
`;

const moveGlass = keyframes`
  0% {
    transform: translate(-300px);
  }
  
  50% {
    transform: translate(4px);
  }
  
  100% {
    transform: translate(0);
  }
`;

const soundAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
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
  
  .auto-icon {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
    //jpeg
    // ::before {
    //   content: url(${car});
    //   position: absolute;
    //   top: 25%;
    //   right: 30%;
    //   animation: ${moveCar} 3s ease;
    //   animation-iteration-count: 1;
    // }
    
    // svg
    ::before {
      content: '';
      position: absolute;
      width: 143px;
      height: 150px;
      top: 0;
      right: 30%;
      background-image: url(${car});
      background-repeat: no-repeat;
      background-size: 300%;
      background-position-x: 50%;
      background-position-y: 49%;
      animation: ${moveCar} 3s ease;
      animation-iteration-count: 1;
    }
  }

  .telefon-icon {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    // jpeg
    // ::before {
      //   content: url(${calling});
    //   position: absolute;
    //   top: 25%;
    //   right: 30%;
      //   animation: ${shake} 0.5s;
    //   animation-iteration-count: 5;
    //   animation-delay: 5s;
    // }

    //svg
    // ::before {
    //   content: '';
    //   position: absolute;
    //   width: 143px;
    //   height: 150px;
    //   top: -50%;
    //   right: 20%;
    //   background-image: url(${calling});
    //   background-size: 100%;
    //   background-position-x: 54%;
    //   background-position-y: 34%;
    //   animation: ${shake} 0.5s;
    //   animation-iteration-count: 5;
    //   animation-delay: 5s;
    // }
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

export const CarContainer = styled.div`
  width: 45%;
  height: 120px;
  position: absolute;
  top: 23%;
  left: 55%;
  overflow: hidden;

  .car {
    position: relative;
    width: 69px;
    height: 69px;
    background-image: url(${car});
    background-repeat: no-repeat;
    //background-size: 300%;
    //background-position-x: 54%;
    //background-position-y: 39%;
    animation: ${moveCar} 3s ease;
    animation-iteration-count: 1;
  }
`;

export const LeftGlassContainer = styled.div`
  width: 45%;
  height: 150px;
  position: absolute;
  top: 32%;
  right: 54%;
  z-index: 1;
  overflow: hidden;

  .left-glass {
    width: 143px;
    height: 150px;
    position: relative;
    background-image: url(${leftGlass});
    background-size: 267%;
    background-position-x: 45%;
    background-position-y: 41%;
    animation: ${moveGlass} 5s linear;
    animation-iteration-count: 1;
  }
`;

export const SoundContainer = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 30%;
  left: 10%;
  z-index: 1;
  overflow: hidden;
  
  .sound {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url(${sound});
    background-size: 262%;
    background-position-x: 53%;
    background-position-y: 28%;
    animation: ${soundAnimation} 4.5s linear;
    animation-iteration-count: 1;
  }
`;

export const RightGlassContainer = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 39%;
  left: 23%;
  z-index: 1;

  .right-glass {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url(${rightGlass});
    background-size: 400%;
    background-position-x: 59%;
    background-position-y: 49%;
  }
`;

export const PhoneContainer = styled.div`
  width: 38%;
  height: 120px;
  position: absolute;
  top: 59%;
  left: 62%;
  overflow: hidden;

  .calling {
    width: 69px;
    height: 69px;
    position: relative;
    background-image: url(${calling});
    //background-size: 380%;
    //background-position-x: 54%;
    //background-position-y: 34%;
    animation: ${shake} 0.5s;
    animation-iteration-count: 5;
    animation-delay: 5s;
  }
`;


