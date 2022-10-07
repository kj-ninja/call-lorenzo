import {FC, Fragment} from 'react';
import useCheckScroll from "../hooks/useCheckScroll";
import {content} from "../../content";
import { Container } from '../../styles/styled/Container';
import {
  StyledHowAreWeDoing,
  StyledTile,
  SectionFooter
} from "./styles";

const HowAreWeDoing: FC = () => {
  const { tiles, footerText, footerBoldText } = content.howAreWeDoing;
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
