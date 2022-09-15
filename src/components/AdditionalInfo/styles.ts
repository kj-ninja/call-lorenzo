import styled from "styled-components";
import { IDevice } from "../../settings/media";

export const StyledAdditionalInfo = styled.section`
  margin-top: 35px;
  
  .section-container {
    height: calc(100vh - 188px);
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .first-paragraph {
    width: 88%;

    @media only screen and ${IDevice.desktopXS} {
      width: 37%;
      text-align: center;
    }
  }
  
  .first-paragraph__coloured {
    color: ${(props) => (props.theme.colors.additionalTextColor)};
    font-weight: bolder;
  }
  
  .second-paragraph {
    width: 88%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    @media only screen and ${IDevice.desktopXS} {
      width: 45%;
      margin-top: 120px;
      align-items: center;
    }
  }
  
  .second-paragraph__coloured {
    color: ${(props) => (props.theme.colors.additionalTextColor)};
    font-weight: bolder;
    margin-bottom: 5px;
  }

  .second-paragraph span {
    margin-bottom: 3px;
  }
  
  .third-paragraph {
    width: 75%;
    margin-top: 160px;
    text-align: center;

    @media only screen and ${IDevice.desktopXS} {
      width: 15%;
    }
  }
  
  .third-paragraph__coloured {
    color: ${(props) => (props.theme.colors.additionalTextColor)};
    font-weight: bolder;
  }
`
