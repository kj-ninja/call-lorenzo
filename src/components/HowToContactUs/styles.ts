import styled from "styled-components";
import { IDevice } from "../../settings/media";

export const StyledHowToContactUs = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  
  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 70%;
    text-align: center;
    @media only screen and ${IDevice.desktopXS} {
      margin: 50px 0;
    }
  }
  
  .container {
    width: 100%;
    height: calc(100vh - 267px);
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    @media only screen and ${IDevice.desktopXS} {
      height: calc(100vh - 310px);
    }
  }
  
  .container__first-tile {
    width: 85%;
    min-height: 45px;
    display: flex;
    align-self: flex-start;
    justify-content: flex-end;
    align-items: center;
    background-color: ${(props) => (props.theme.colors.secondaryColor)};

      @media only screen and ${IDevice.desktopXS} {
          width: 45%;
          align-self: center;
          margin-bottom: 20px;
      }
  }

  .first-tile__text {
    width: 60%;
    margin-right: 50px;
    text-align: right;

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
    align-items: center;  
    justify-content: center;
    padding: 0 30px;
    
    background-color: ${(props) => (props.theme.colors.secondaryColor)};

      @media only screen and ${IDevice.desktopXS} {
        width: 45%;
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
  display: flex;
  width: 100%;
  height: 150px;
  position: relative;

  @media only screen and ${IDevice.desktopXS} {
    width: 400px;
    align-self: center;
  }
`;

export const TelephoneImage = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  top: -40%;
  left: 8%;
`;

export const SmsImage = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  top: -40%;
  left: 8%;

  @media only screen and ${IDevice.desktopXS} {
    left: unset;
    right: 8%;
  }
`;

export const ImportantNotes = styled.div`
  width: 85%;
  height: 80px;
  display: flex;
  align-self: flex-end;
  margin: 45px 0 15px 0;
  padding: 10px;
  border: 3px solid ${(props) => props.theme.colors.secondaryColor};

  .notes-text-style {
    font-weight: bolder;
  }

  @media only screen and ${IDevice.desktopXS} {
   width: 45%;
   align-self: center;
   margin: 80px 0 15px 0;
  }
`;
