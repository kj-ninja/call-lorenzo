import { FC, useContext } from 'react';
import useCheckScroll from "../hooks/useCheckScroll";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import { Container } from '../../styles/styled/Container';
import { StyledHowAreWeDoing, StyledTile, SectionFooter } from "./styles";


const HowAreWeDoing: FC = () => {
  const { language } = useContext(LanguageContext);
  const { scrollOnFirstScreen } = useCheckScroll();

  return (
    <Container>
      <StyledHowAreWeDoing scrollOnFirstScreen={scrollOnFirstScreen}>
        <h2>{dictionaryList[language as keyof typeof dictionaryList].howAreWeDoing.title}</h2>
        <div className='tiles-container'>
          {dictionaryList[language as keyof typeof dictionaryList].howAreWeDoing.tiles.map((tile, key) => (
            <StyledTile key={key} className={`${tile.icon} number-${tile.order}`} tile={tile}>
              {
                tile.description ?
                <>
                <span className="tile-order">{tile.order}</span>
                <span className="tile-description">{tile.description}</span>
                </>
                : null
              }
              {
                !tile.description ?
                  <div className={`${tile.icon}-icon`}></div>
                  : null
              }
            </StyledTile>
          ))}
        </div>
        <SectionFooter language={language}>
          <div className="horizontal-line" />
          <span className="footer-texts">{dictionaryList[language as keyof typeof dictionaryList].howAreWeDoing.footerText}<span className="footer-bold-text">{dictionaryList[language as keyof typeof dictionaryList].howAreWeDoing.footerBoldText}</span></span>
          <div className="horizontal-line" />
        </SectionFooter>
      </StyledHowAreWeDoing>
    </Container>
  );
};

export default HowAreWeDoing;
