import { createGlobalStyle } from "styled-components";
import { IDevice } from "../settings/media";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //font-size: 62.5%;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;

    @media only screen and ${IDevice.desktopXS} {
      scroll-behavior: unset;
      scroll-padding-top: 20px;
    }
  }
`

export default GlobalStyle;
