import Tile from "../Tile";
import { Container } from "../../styles/styled/Container";
import { StyledWhatIsOurOffer } from "./styles";
import { content } from "../../content";

const WhatIsOurOffer = () => {
  const {title, tileTexts} = content.WhatIsOurOffer;

  return (
    <Container>
      <StyledWhatIsOurOffer>
        <h2>{title}</h2>
        <div className="tiles-container">
          {tileTexts.map((tile) => (
            <Tile tile={tile} key={tile.tileOrder}/>
          ))}
        </div>
      </StyledWhatIsOurOffer>
    </Container>

  )
}

export default WhatIsOurOffer;
