import {FC, Fragment} from 'react';
import { StyledHowAreWeDoing, StyledTile } from "./styles";
import {content} from "../../content";
import { Container } from '../../styles/styled/Container';
import useCheckScroll from "../hooks/useCheckScroll";

interface Props {
}

const HowAreWeDoing: FC<Props> = () => {
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
