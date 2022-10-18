import styled from "styled-components";
import driver from "../../assets/driver.svg"
import { IDevice } from "../../settings/media";

type ILanguageProps = {
    language: string
}

export const StyledWhenWeWork = styled.section<ILanguageProps>`
    margin: 25px 0;
    line-height: ${(props) => (props.theme.additionalStyles.lineHeight)};

    @media only screen and ${IDevice.desktopXS} {
        margin: 40px 0;
    }
    
  h2 {
      height: ${props => props.theme.additionalStyles.heightTitle};
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: ${props => props.theme.additionalStyles.borderTitle};
      border-top: ${props => props.theme.additionalStyles.borderTitle};
  }
  
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
  
  .container__first-tile {
    width: 88%;
    min-height: 65px;
    height: 100%;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.tileBorder.rightBorders};
    font-weight: bold;
    font-size: 24px;
    background-color: ${(props) => (
            props.theme.colors.secondaryColor
    )};

      @media only screen and ${IDevice.desktopXS} {
          width: 600px;
          align-self: center;
      }
  }
  
  .container__second-tile {
    width: 88%;
    min-height: 75px;
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${props => (props.language === "pl") ? "0 30px" : "0 20px"};
    border-radius: ${props => props.theme.tileBorder.leftBorders};
    background-color: ${(props) => (
            props.theme.colors.secondaryColor
    )};

      @media only screen and ${IDevice.desktopXS} {
          width: 600px;
          align-self: center;
      }
  }
  
  .tile-description {
    width: ${props => (props.language === "pl") ? "85%" : "95%"};
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
    width: 200px;
    height: 220px;
    align-self: center;
    position: relative;
    
    &:before {
        content: url(${driver});
        position: absolute;
        width: 183px;
        height: 150px;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        margin: auto;
    }
`;
