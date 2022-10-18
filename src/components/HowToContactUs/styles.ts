import styled from "styled-components";
import phone from "../../assets/phone.svg";
import message from "../../assets/message.svg";
import { IDevice } from "../../settings/media";

export const StyledHowToContactUs = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: ${(props) => (props.theme.additionalStyles.lineHeight)};
  
  h2 {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
    height: ${props => props.theme.additionalStyles.heightTitle};
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => props.theme.additionalStyles.borderTitle};
    border-top: ${props => props.theme.additionalStyles.borderTitle};

    @media only screen and ${IDevice.desktopXS} {
      margin: 50px 0;
    }
  }
  
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    
  }
  
  .container__first-tile {
    width: 85%;
    min-height: 45px;
    display: flex;
    align-self: flex-start;
    justify-content: flex-end;
    align-items: center;
    border-radius: ${props => props.theme.tileBorder.rightBorders};
    background-color: ${(props) => (props.theme.colors.secondaryColor)};

      @media only screen and ${IDevice.desktopXS} {
          width: 600px;
          align-self: center;
          margin-bottom: 20px;
      }
  }

  .first-tile__text {
    width: 80%;
    margin-right: 50px;
    text-align: right;
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
    color: black;

    @media only screen and ${IDevice.desktopXS} {
      width: 100%;
      text-align: center;
      margin-right: 0;
    }
  }
  
  .container__second-tile {
    width: 85%;
    min-height: 45px;
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    align-items: flex-start;  
    justify-content: center;
    padding: 0 30px;
    border-radius: ${props => props.theme.tileBorder.leftBorders};
    font-weight: bold;
    background-color: ${(props) => (props.theme.colors.secondaryColor)};

      @media only screen and ${IDevice.desktopXS} {
        width: 600px;
        align-items: center;
        align-self: center;
        margin-top: 20px;
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
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 150px;
  align-self: center;
  position: relative;
  
  &:before {
    content: url(${phone});
    width: 60px;
    height: 60px;
    position: absolute;
    right: 30%;
    left: 0;
    bottom: 0;
    top: 0;
    margin: auto;
  }
  
  &:after {
    content: url(${message});
    width: 60px;
    height: 60px;
    position: absolute;
    right: 0;
    left: 30%;
    bottom: 0;
    top: 0;
    margin: auto;
    text-align: center;
    padding-bottom: 5px;
  }
`;

export const ImportantNotes = styled.div`
  width: 85%;
  height: 85px;
  display: flex;
  align-self: flex-end;
  align-items: center;
  margin: 45px 0 15px 0;
  padding: 10px;
  border: 3px solid ${(props) => props.theme.colors.secondaryColor};
  border-radius: ${props => props.theme.tileBorder.leftBorders};

  .notes-text-style {
    font-weight: bolder;
  }

  @media only screen and ${IDevice.desktopXS} {
   width: 45%;
   align-self: center;
   margin: 80px 0 15px 0;  
   border-radius: ${props => props.theme.tileBorder.borderRadiusValue};
  }
`;
