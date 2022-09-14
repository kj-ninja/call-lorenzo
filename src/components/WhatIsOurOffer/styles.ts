import styled from "styled-components";
import { IDevice } from "../../settings/media";

export const StyledWhatIsOurOffer = styled.section`
  h2 {
    margin-top: 20px;
    text-align: center;

    @media only screen and ${IDevice.desktopXS} {
      margin-top: 60px;
    }
  }

  .tiles-container {
    min-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media only screen and ${IDevice.desktopXS} {
      margin-top: 20px;
    }
  }
`
