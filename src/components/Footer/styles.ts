import styled from "styled-components";

export const UpperLine = styled.div`
  width: 100%;
  height: 15px;
  margin-top: 5px;
  background-color: ${(props) => props.theme.colors.primaryColor};
`;

export const LowerLine = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: 5px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: white;
`;
