import styled, { keyframes } from "styled-components";
import { IDevice } from "../../settings/media";

type ITileProps = {
  toggler: boolean;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  75% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const fadeOut = keyframes`
  0% {
  opacity: 1;
  transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px);
  }
`

export const TileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  .fadeOut {
    opacity: 1;
    animation: ${fadeOut} 0.25s;
    animation-fill-mode: forwards;
  }

  .fadeIn {
    opacity: 0;
    animation: ${fadeIn} 0.4s;
    animation-fill-mode: forwards;
  }

  // frames 1,3,5,7 etc.
  :nth-child(odd) {
    align-items: flex-start;
    
    @media only screen and ${IDevice.desktopXS} {
      align-items: center;
    }

    .tile {
      justify-content: flex-end;
      border-radius: 0 10px 10px 0;
      @media only screen and ${IDevice.desktopXS} {
        justify-content: space-around;
      }
    }
  }

  // frames 2,4,6,8 etc.
  :nth-child(even) {
    align-items: flex-end;
    
    @media only screen and ${IDevice.desktopXS} {
      align-items: center;
    }

    .tile {
      justify-content: center;
      border-radius: 10px 0 0 10px;
      @media only screen and ${IDevice.desktopXS} {
        justify-content: space-around;
      }
    }

    .tile-order {
      margin-left: 4px;

      @media only screen and ${IDevice.desktopXS} {
        margin-left: unset;
      }
    }

    .tile-toggle {
      padding-left: 3px;
      

      @media only screen and ${IDevice.desktopXS} {
        padding-left: unset;
        width: fit-content;
      }
    }
  }

  .hover-effect {
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    transition-duration: 0.3s;
    transition-property: box-shadow;
  }
  .hover-effect:hover, .hover-effect:focus, .hover-effect:active {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  }
`

export const StyledTile = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  font-weight: bolder;
  background-color: ${(props) => (props.theme.colors.secondaryColor)};
  padding: 10px;
  margin: 20px 0;

  @media only screen and ${IDevice.desktopXS} {
    width: 100%;
    margin: 30px 0;
  }

  .tile-text-wrapper {
    width: 75%;
    display: flex;
    align-items: center;
  }

  .tile-order {
    margin-right: 10px;
  }

  .tile-title {
    width: 85%;
  }
  
  .toggle-container {
    display: flex;
    align-items: center;
    width: 100px;
  }

  .tile-toggle {
    cursor: pointer;
    align-self: center;
    font-size: 12px;

    @media only screen and ${IDevice.desktopXS} {
      padding-left: unset;
      width: fit-content;
    }
  }
`;

export const StyledDescription = styled.div<ITileProps>`
  width: 89%;
  align-self: center;
  
  @media only screen and ${IDevice.desktopXS} {
    width: 45%;
    text-align: center;
  }
  
  .first-paragraph {
    color: ${(props) => (props.theme.colors.additionalTextColor)};
    text-align: center;
    margin-bottom: 15px;
  }

  .second-paragraph {
    @media only screen and ${IDevice.desktopXS} {
      margin-bottom: 10px;
    }
  }

  .third-paragraph {
    margin-top: 3px;
    font-weight: bold;

    @media only screen and ${IDevice.desktopXS} {
      margin-bottom: 10px;
    }
  }
`
