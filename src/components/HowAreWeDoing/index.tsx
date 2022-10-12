import { FC } from 'react';
import { StyledHowAreWeDoing, StyledTile, SectionFooter } from "./styles";
import { content } from "../../content";
import { Container } from '../../styles/styled/Container';
import useCheckScroll from "../hooks/useCheckScroll";

const HowAreWeDoing: FC = () => {
  const { tiles,footerText, footerBoldText } = content.howAreWeDoing;
  const { scrollOnFirstScreen } = useCheckScroll();

  return (
    <Container>
      <StyledHowAreWeDoing scrollOnFirstScreen={scrollOnFirstScreen}>
        <h2>Jak działamy?</h2>
        <div className='tiles-container'>
          {tiles.map((tile, key) => (
            <StyledTile key={key} className={`${tile.icon} number-${tile.order}`} tile={tile}>
              {
                tile.description ?
                <>
                <span className="tile-order">{tile.order}.</span>
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
        <SectionFooter>
          <div className="horizontal-line" />
          <span>{footerText}<span className="footer-bold-text">{footerBoldText}</span></span>
          <div className="horizontal-line" />
        </SectionFooter>
      </StyledHowAreWeDoing>
    </Container>
  );
};

export default HowAreWeDoing;
