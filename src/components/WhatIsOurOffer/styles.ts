import styled from "styled-components";
import { IDevice } from "../../settings/media";

export const StyledWhatIsOurOffer = styled.section`
  margin-top: 30px;
  line-height: ${(props) => (props.theme.additionalStyles.lineHeight)};

  @media only screen and ${IDevice.desktopXS} {
    margin-top: 60px;
  }
  
  h2 {
    height: ${props => props.theme.additionalStyles.heightTitle};
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${props => props.theme.additionalStyles.borderTitle};
    border-top: ${props => props.theme.additionalStyles.borderTitle};
    margin: 10px 0;
    
    @media only screen and ${IDevice.desktopXS} {
      margin: 20px 0;
    }
  }

  .tiles-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media only screen and ${IDevice.desktopXS} {
      margin-top: 20px;
    }
  }
`
