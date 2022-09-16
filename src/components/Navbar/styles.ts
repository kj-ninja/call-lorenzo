import styled from "styled-components";
import theme from "../../styles/theme";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  
  ul {
    max-width: ${(props) => (props.theme.widthLimit.desktop)};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    
    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      white-space: nowrap;
      
      a {
        padding: 13px 5px;
        font-size: 13px;
        text-decoration: none;
        color: ${theme.colors.white}
      }
    }
  }
`;

export default StyledNavbar;
