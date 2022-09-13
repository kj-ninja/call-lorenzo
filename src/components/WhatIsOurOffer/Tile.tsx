import { StyledTile, StyledDescription } from "./styles";
import { FC, Fragment, useState } from "react";
import { IOurOfferTile } from "../../types";

interface Props {
  tile: IOurOfferTile
}

const Tile:FC<Props> = (tile) => {
  const [show, setShow] = useState(false);
  const toggleHandler = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <StyledTile>
        <span onClick={toggleHandler}>{!show ? "pokaż" : "ukryj"}</span>
      </StyledTile>
      {show ? <StyledDescription>{tile.tile.tileOrder}</StyledDescription> : null}
    </Fragment>
  )
}

export default Tile;
