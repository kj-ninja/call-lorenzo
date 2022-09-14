import { FC, Fragment, useState } from "react";
import { IOurOfferTile } from "../../types";
import {
  StyledTile,
  StyledDescription,
  TileWrapper
} from "./styles";
import { content } from "../../content";

interface Props {
  tile: IOurOfferTile
}

const Tile: FC<Props> = (tile) => {
  const [show, setShow] = useState(false);

  const { toggleText } = content.WhatIsOurOffer;

  const toggleHandler = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <TileWrapper>
        <StyledTile className="tile">
          <div className='tile-text-wrapper'>
            <span className='tile-order'>
              {tile.tile.tileOrder}
            </span>
            <span className='tile-title'>
              {tile.tile.tileTitle}
            </span>

          </div>
          <span className='tile-toggle' onClick={toggleHandler}>
              {!show ? toggleText.show : toggleText.hide}
            </span>
        </StyledTile>
        {
          show ?
            <StyledDescription>
              <div className='first-paragraph'>
                {tile.tile.tileText}
              </div>
              <div className='second-paragraph'>
                {tile.tile.tileDescription}
              </div>
              {
                tile.tile.tileBoldText ?
                  <div className='third-paragraph'>
                    {tile.tile.tileBoldText}
                  </div>
                  : null
              }
            </StyledDescription>
            : null
        }
      </TileWrapper>
    </Fragment>
  )
}

export default Tile;
