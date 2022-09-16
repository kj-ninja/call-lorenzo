import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.white};
  
  h1 {
    width: 100%;
    text-align: center;
    border-bottom: 5px solid ${(props) => props.theme.colors.white};
    padding-bottom: 15px;
  }
`;

export default StyledHeader;
