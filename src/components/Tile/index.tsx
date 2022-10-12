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
  const [fadeOutAnimation, setFadeOutAnimation] = useState(false);

  const { toggleText } = content.WhatIsOurOffer;

  const toggleHandler = () => {
    if (show) {
      setFadeOutAnimation(!fadeOutAnimation)
      setTimeout(() => {
        setShow(false);
      }, 100);
    } else {
      setFadeOutAnimation(!fadeOutAnimation)
      setTimeout(() => {
        setShow(true);
      }, 100);
    }
  };

  return (
    <Fragment>
      <TileWrapper>
        <StyledTile className="tile hover-effect">
          <div className='tile-text-wrapper'>
            <span className='tile-order'>
              {tile.tile.tileOrder}
            </span>
            <span className='tile-title'>
              {tile.tile.tileTitle}
            </span>
          </div>
          <div className="toggle-container">
            <span className='tile-toggle' onClick={toggleHandler}>
              {!show ? toggleText.show : toggleText.hide}
            </span>
          </div>
        </StyledTile>
        {
          show &&
          <StyledDescription toggler={show} className={`${fadeOutAnimation ? "fadeIn" : "fadeOut"}`}>
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
        }
      </TileWrapper>
    </Fragment>
  )
}

export default Tile;
