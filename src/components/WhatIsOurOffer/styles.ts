import styled from "styled-components";
import { IDevice } from "../../settings/media";

export const StyledWhatIsOurOffer = styled.section`
  h2 {
    margin: 31px;
    text-align: center;
  }

  .tiles-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
  
  .test {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
  }
`

export const StyledTile = styled.div`
  width: 90%;
  height: 55px;
  background-color: ${(props) => (props.theme.colors.secondaryColor)};
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px;

  :nth-child(2n) {
    align-self: flex-start;
  }

  :nth-child(2n+1) {
    align-self: flex-end;
  }
`;

export const StyledDescription = styled.div`
  width: 90%;
  height: 55px;
  background-color: red;
`


