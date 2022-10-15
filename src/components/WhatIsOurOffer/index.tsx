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
      <StyledWhatIsOurOffer id={dictionaryList[language as keyof typeof dictionaryList].header.navigation[0]}>
        <h2>{dictionaryList[language as keyof typeof dictionaryList].WhatIsOurOffer.title}</h2>
        <div className="tiles-container">
          {dictionaryList[language as keyof typeof dictionaryList].WhatIsOurOffer.tileTexts.map((tile) => (
            <Tile tile={tile} key={tile.tileOrder}/>
          ))}
        </div>
      </StyledWhatIsOurOffer>
    </Container>
  )
}

export default WhatIsOurOffer;
