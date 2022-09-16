import {FC} from 'react';
import {StyledHowAreWeDoing, StyledTile} from "./styles";
import {content} from "../../content";
import { Container } from '../../styles/styled/Container';

interface Props {
}

const HowAreWeDoing: FC<Props> = () => {
  const { tiles } = content.howAreWeDoing;

  return (
    <Container>
      <StyledHowAreWeDoing>
        <h2>Jak działamy?</h2>
        <div className='tiles-container'>
          {tiles.map((tile) => (
            <StyledTile tile={tile}>
              {tile.description}
            </StyledTile>
          ))}
        </div>
      </StyledHowAreWeDoing>
    </Container>
  );
};

export default HowAreWeDoing;
