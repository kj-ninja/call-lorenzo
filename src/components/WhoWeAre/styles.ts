import styled from "styled-components";
import { IDevice } from "../../settings/media";

export const StyledWhoWeAre = styled.section`
  
  @media only screen and ${IDevice.desktopXS} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h2 {
    margin-top: 20px;
    text-align: center;
  }

  .content-container {
    height: calc(100vh - 175px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media only screen and ${IDevice.desktopXS} {
      width: 45%;
      align-items: unset;
      margin-top: 20px;
    }
  }
  
  .first-paragraph {
    width: 94%;
    display: flex;
    flex-direction: column;

    @media only screen and ${IDevice.desktopXS} {
      text-align: center;
      width: 70%;
    }
  }

  .first-paragraph__coloured {
    color: ${(props) => (props.theme.colors.additionalTextColor)};
    font-weight: bolder;
  }

  .second-paragraph {
    width: 94%;

    @media only screen and ${IDevice.desktopXS} {
      text-align: center;
      width: 70%;
    }
  }

  .second-paragraph__coloured {
    color: ${(props) => (props.theme.colors.additionalTextColor)};
    font-weight: bolder;
  }

  .second-paragraph__bold-text {
    font-weight: bolder;
  }
`;

export const ImageContainer = styled.div`
  width: 94%;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media only screen and ${IDevice.desktopXS} {
    width: 80%;
    height: 400px;
  }
  
  .source {
    font-size: 6px;
    margin: 8px 10px;
  }
`;
export const GraphicsContainer = styled.div`
  width: 94%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  @media only screen and ${IDevice.desktopXS} {
    width: 80%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Graphic = styled.img`
  width: 25%;
  height: 100%;
`;
