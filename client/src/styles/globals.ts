import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 67.5%;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
