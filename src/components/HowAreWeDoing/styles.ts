import styled from "styled-components";
import {ITile} from "../../types";

type ITileProps = {
  tile: ITile;
}

export const StyledHowAreWeDoing = styled.section`
  h2 {
    text-align: center;
  }
  .tiles-container {
    height: calc(100vh - 175px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`

export const StyledTile = styled.div<ITileProps>`
  height: ${(props) => (
    props.tile.description ?
            '17.5%' : '25%'
  )};
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