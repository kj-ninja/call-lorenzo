import { FC } from 'react';
import { StyledHowAreWeDoing, StyledTile } from "./styles";
import { content } from "../../content";
import { Container } from '../../styles/styled/Container';
import useCheckScroll from "../hooks/useCheckScroll";

const HowAreWeDoing: FC = () => {
  const { tiles } = content.howAreWeDoing;
  const { scrollOnFirstScreen } = useCheckScroll();

  return (
    <Container>
      <StyledHowAreWeDoing scrollOnFirstScreen={scrollOnFirstScreen}>
        <h2>Jak działamy?</h2>
        <div className='tiles-container'>
          {tiles.map((tile) => (
            <StyledTile className={tile.icon} tile={tile}>
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
      </StyledHowAreWeDoing>
    </Container>
  );
};

export default HowAreWeDoing;
