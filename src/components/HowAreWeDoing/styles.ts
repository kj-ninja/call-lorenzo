import styled from "styled-components";
import {ITile} from "../../types";
import { IDevice } from "../../settings/media";

type ITileProps = {
  tile: ITile;
}

export const StyledHowAreWeDoing = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  line-height: ${(props) => (props.theme.additionalStyles.lineHeight)};
  
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
  .tiles-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media only screen and ${IDevice.desktopXS} {
      max-width: 45%;
    }
  }
`

export const StyledTile = styled.div<ITileProps>`
  height: 90px;
  margin-bottom: 50px;
  width: 50%;
  background-color: ${(props) => (
    props.tile.description ? 
            props.theme.colors.secondaryColor :
            props.theme.colors.white
  )};
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px;
`
