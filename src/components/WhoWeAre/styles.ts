import styled from "styled-components";
import picture from "../../assets/group-final.jpeg";
import { IDevice } from "../../settings/media";

export const StyledWhoWeAre = styled.section`
  margin-top: 20px;
  padding: 0 3%;
  line-height: ${(props) => (props.theme.additionalStyles.lineHeight)};
  
  @media only screen and ${IDevice.desktopXS} {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  
  h2 {
    margin-bottom: 35px;
    text-align: center;
  }

  .content-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media only screen and ${IDevice.desktopXS} {
      width: 100%;
      align-items: unset;
      margin-top: 20px;
    }
  }
  
  .first-paragraph {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

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
    margin-bottom: 30px;

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
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 30px;

  @media only screen and ${IDevice.desktopXS} {
    height: 600px;
  }
  
  .source {
    font-size: 6px;
    margin: 8px 10px;

    @media only screen and ${IDevice.desktopXS} {
      font-size: 8px;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${picture});
  background-repeat: no-repeat;
  background-size: cover;
`;


export const GraphicsContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  @media only screen and ${IDevice.desktopXS} {
    height: 50px;
    justify-content: space-between;
    padding: 0 30px;
  }
`;

export const Graphic = styled.img`
  height: 100%;
`;
