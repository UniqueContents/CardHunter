import { DefaultTheme } from "styled-components";

export const whiteTheme: DefaultTheme = {
  mainBgColor: "white",
  mainTextColor: "black",
  lineColor: "grey",
  cardBgColor: "#c780fa",
};

export const darkTheme: DefaultTheme = {
  mainBgColor: "black",
  mainTextColor: "white",
  lineColor: "white",
  cardBgColor: "",
};

const customMediaQuery = (maxWidth: number): string =>
  `@media screen and (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
