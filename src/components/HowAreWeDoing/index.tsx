import {FC} from 'react';
import { StyledHowAreWeDoing, StyledTile, CarContainer, LeftGlassContainer, SoundContainer, RightGlassContainer, PhoneContainer} from "./styles";
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
        <CarContainer>
          <div className="car"/>
        </CarContainer>
        <LeftGlassContainer>
          <div className="left-glass"/>
        </LeftGlassContainer>
        <SoundContainer>
          <div className="sound"/>
        </SoundContainer>
        <RightGlassContainer>
          <div className="right-glass"/>
        </RightGlassContainer>
        <PhoneContainer>
          <div className="calling"/>
        </PhoneContainer>
    </StyledHowAreWeDoing>
  );
};

export default HowAreWeDoing;
