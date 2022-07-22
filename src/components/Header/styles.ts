import styled from "styled-components";
import theme from "../../styles/theme";

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
  
  h1 {
    width: 100%;
    text-align: center;
    border-bottom: 5px solid ${theme.colors.white};
    padding-bottom: 15px;
  }
`;

export default StyledHeader;