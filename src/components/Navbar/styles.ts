import styled from "styled-components";
import theme from "../../styles/theme";
import { IDevice } from "../../settings/media";

type IIsMobileProps = {
  isMobile: boolean;
  scrollOnFirstScreen: boolean;
  toggleMenu?: boolean
}

const StyledNavbar = styled.nav<IIsMobileProps>`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: ${(props) => (props.scrollOnFirstScreen ? "calc(100vh - 78px)" : "calc(100vh - 87px)")};
  z-index: 999;
  background-color: ${(props) => props.theme.colors.primaryColor};
  visibility: ${props => (props.toggleMenu ? "show" : "hidden")};
  opacity: ${props => (props.toggleMenu ? "1" : "0")};;
  transition: visibility 4s linear 0.33s, opacity 0.4s linear;
  transition-delay: 0s;
  
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 75%;
    max-width: ${(props) => (props.theme.additionalStyles.desktop)};
    height: 75%;
    margin-top: 30px;
    
    li {
      height: 60px;
      list-style-type: none;
      display: flex;
      justify-content: center;
      border-bottom: 2px solid white;
      
      a {
        width: 100%;
        text-align: center;
        text-decoration: none;
        color: ${theme.colors.white};
        padding: 13px 5px;
        font-size: 20px;
      }
    }
  }

  @media only screen and ${IDevice.desktopXS} {
    height: 40px;
    position: unset;
    visibility: visible;
    opacity: 1;

    ul {
      flex-direction: unset;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      margin-top: 0;
      
      li {
        height: 100%;
        align-items: center;
        white-space: nowrap;
        border-bottom: unset;

        a {
          font-size: 13px;
        }
      }
    }
  }
`;

export default StyledNavbar;
