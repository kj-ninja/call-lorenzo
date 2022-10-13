import { useContext } from "react";
import Tile from "../Tile";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import { Container } from "../../styles/styled/Container";
import { StyledWhatIsOurOffer } from "./styles";

const WhatIsOurOffer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <StyledWhatIsOurOffer id={dictionaryList[language].header.navigation[0]}>
        <h2>{dictionaryList[language].WhatIsOurOffer.title}</h2>
        <div className="tiles-container">
          {dictionaryList[language].WhatIsOurOffer.tileTexts.map((tile) => (
            <Tile tile={tile} key={tile.tileOrder}/>
          ))}
        </div>
      </StyledWhatIsOurOffer>
    </Container>
  )
}

export default WhatIsOurOffer;
