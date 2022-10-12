import { FC, Fragment, useContext, useState } from "react";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import { IOurOfferTile } from "../../types";

import {
  StyledTile,
  StyledDescription,
  TileWrapper
} from "./styles";

interface Props {
  tile: IOurOfferTile
}

const Tile: FC<Props> = (tile) => {
  const [show, setShow] = useState(false);
  const { language } = useContext(LanguageContext);

  const toggleHandler = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <TileWrapper>
        <StyledTile className="tile hover-effect" onClick={toggleHandler}>
          <div className='tile-text-wrapper'>
            <span className='tile-order'>
              {tile.tile.tileOrder}
            </span>
            <span className='tile-title'>
              {tile.tile.tileTitle}
            </span>

          </div>
          <span className='tile-toggle'>
              {!show ?
                dictionaryList[language].WhatIsOurOffer.toggleText.show
                :
                dictionaryList[language].WhatIsOurOffer.toggleText.hide}
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
