import Tile from "../Tile";
import { Container } from "../../styles/styled/Container";
import { StyledWhatIsOurOffer } from "./styles";
import { content } from "../../content";

const WhatIsOurOffer = () => {
  const {title, tileTexts} = content.WhatIsOurOffer;
  const { navigation } = content.header;

  return (
    <Container>
      <StyledWhatIsOurOffer id={navigation[0]}>
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
