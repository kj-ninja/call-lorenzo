import styled from "styled-components";

export const UpperLine = styled.div`
  height: 15px;
  margin-top: 5px;
  background-color: ${(props) => props.theme.colors.primaryColor};
`;

export const LowerLine = styled.div`
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: white;

  .lower-line-container {
    max-width: ${(props) => (props.theme.widthLimit.desktop)};
    width: 100%;
  }
`;
