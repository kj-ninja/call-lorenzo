import { createGlobalStyle } from "styled-components";
import { IDevice } from "../settings/media";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  ;
    //font-size: 62.5%;
  }

  html {
    scroll-behavior: auto;
    scroll-padding-top: 90px;

    @media only screen and ${IDevice.desktopXS} {
      scroll-behavior: smooth;
      scroll-padding-top: 0;
    }
  }
`

export default GlobalStyle;
