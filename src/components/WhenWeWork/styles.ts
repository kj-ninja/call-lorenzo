import styled from "styled-components";
import driver from "../../assets/driver.svg"
import { IDevice } from "../../settings/media";

export const StyledWhenWeWork = styled.section`
    margin: 60px 0;
    line-height: 1.2;
    
  h2 {
    text-align: center;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
  
  .container__first-tile {
    width: 85%;
    min-height: 65px;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (
            props.theme.colors.secondaryColor
    )};

      @media only screen and ${IDevice.desktopXS} {
          width: 45%;
          align-self: center;
      }
  }
  
  .container__second-tile {
    width: 85%;
    min-height: 75px;
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    align-items: center;  
      justify-content: center;
    padding: 0 30px;
    background-color: ${(props) => (
            props.theme.colors.secondaryColor
    )};

      @media only screen and ${IDevice.desktopXS} {
          width: 45%;
          align-self: center;
      }
  }
  
  .tile-description {
    width: 85%;
      @media only screen and ${IDevice.desktopXS} {
          text-align: center;
      }
  }
    
    .tile-margin {
        margin-left: 10px;
        
        @media only screen and ${IDevice.desktopXS} {
            margin-left: -10px;
        }
    }
    
    .tile-hours {
        font-weight: bolder;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 220px;
    background-image: url(${driver});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;

    @media only screen and ${IDevice.desktopXS} {
        width: 70%;
        align-self: center;
        height: 450px;
        background-size: 70%;
    }
`;
