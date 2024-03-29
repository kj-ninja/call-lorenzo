import styled from "styled-components";
import { IDevice } from "../../settings/media";

export const StyledAdditionalInfo = styled.section`
  margin-top: 50px;
  padding: 0 3%;
  line-height: ${(props) => (props.theme.additionalStyles.lineHeight)};

  @media only screen and ${IDevice.desktopXS} {
    margin-top: 100px;
  }
  
  .section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .first-paragraph {
    
    margin-bottom: 10px;

    @media only screen and ${IDevice.desktopXS} {
      width: 70%;
      text-align: center;
    }
  }
  
  .first-paragraph__coloured {
    color: ${(props) => (props.theme.colors.additionalTextColor)};
    font-weight: bolder;
  }
  
  .second-paragraph {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    @media only screen and ${IDevice.desktopXS} {
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
    width: 81%;
    margin: 35px 0 80px 0;
    text-align: center;

    @media only screen and ${IDevice.desktopXS} {
      width: 35%;
    }
  }
  
  .third-paragraph__coloured {
    color: ${(props) => (props.theme.colors.additionalTextColor)};
    font-weight: bolder;
  }
`
