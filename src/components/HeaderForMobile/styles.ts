import styled from "styled-components";

type IBarProps = {
  scrollOnFirstScreen: boolean;
}

export const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.white};
  top: 0;
  z-index: 100;
  
  h1 {
    text-align: center;
    padding: 15px 0;
    letter-spacing: -1px;
  }

  h2 {
    text-align: center;
    padding: 5px 0;
    letter-spacing: -1px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftTitleLine = styled.div<IBarProps>`
  width: ${(props) => (
    props.scrollOnFirstScreen ? "31%" : "25%"
  )};
  height: ${(props) => (
          props.scrollOnFirstScreen ? "8px" : "13px"
  )};
  background: white;
  margin-top: 3px;
`;

export const RightTitleLine = styled.div<IBarProps>`
  width: ${(props) => (
          props.scrollOnFirstScreen ? "31%" : "10%"
  )};
  height: ${(props) => (
          props.scrollOnFirstScreen ? "8px" : "13px"
  )};
  background: white;
  margin-top: 3px;
`;

export const StyledLine = styled.div<IBarProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (
          props.scrollOnFirstScreen ? "38px" : "15px"
  )};
  
  .left-box {
    width: 30px;
    margin-left: 20px;
  }
  
  .phone-number {
    font-weight: bold;
    padding-left: 5px;
  }
    
  .styled-line-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MiddleBlankLine = styled.div<IBarProps>`
  width: 100%;
  height: ${(props) => (
          props.scrollOnFirstScreen ? "3px" : "5px"
  )};
  background-color: white;
`

export const HamburgerMenu = styled.div`
  padding: 2px;
  width: 30px;
  height: 30px;
  margin: 0 15px 0 10px;
  
  div {
    width: 25px;
    height: 5px;
    background-color: white;
    margin: 3px 0;
  }
  
`
