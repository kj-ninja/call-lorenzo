import Tile from "./Tile";
import { StyledWhatIsOurOffer } from "./styles";
import { content } from "../../content";


const WhatIsOurOffer = () => {
  const {tileTexts} = content.WhatIsOurOffer;

  return (
    <StyledWhatIsOurOffer>
      <h2>aaa</h2>
      <div className="tiles-container">
        {tileTexts.map((tile) => (
          <Tile tile={tile} key={tile.tileOrder}/>
        ))}
      </div>
    </StyledWhatIsOurOffer>
  )
}

export default WhatIsOurOffer;
