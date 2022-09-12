import {FC} from 'react';
import {StyledHowAreWeDoing, StyledTile} from "./styles";
import {content} from "../../content";

interface Props {
}

const HowAreWeDoing: FC<Props> = () => {
const {tiles} = content.howAreWeDoing;

  return (
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
  );
};

export default HowAreWeDoing;
