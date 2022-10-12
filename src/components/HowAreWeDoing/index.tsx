import { FC, Fragment, useContext } from 'react';
import useCheckScroll from "../hooks/useCheckScroll";
import { StyledHowAreWeDoing, StyledTile } from "./styles";

import { LanguageContext } from "../../context/language-context";
import { dictionaryList } from "../../content/dictionaryList";

import { Container } from '../../styles/styled/Container';

const HowAreWeDoing: FC = () => {
  const { language } = useContext(LanguageContext);
  const { scrollOnFirstScreen } = useCheckScroll();

  return (
    <Container>
      <StyledHowAreWeDoing scrollOnFirstScreen={scrollOnFirstScreen}>
        <h2>Jak działamy?</h2>
        <div className='tiles-container'>
          {dictionaryList[language].howAreWeDoing.tiles.map((tile) => (
            <StyledTile className={tile.icon} tile={tile}>
              {
                tile.description ?
                <Fragment>
                <span className="tile-order">{tile.order}</span>
                <span className="tile-description">{tile.description}</span>
                </Fragment>
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
      </StyledHowAreWeDoing>
    </Container>
  );
};

export default HowAreWeDoing;
