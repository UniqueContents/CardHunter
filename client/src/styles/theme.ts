import { DefaultTheme } from "styled-components";

export const whiteTheme: DefaultTheme = {
  mainBgColor: "#d3756b",
  subBgColor: "#F0997D",
  mainTextColor: "black",
  subTextColor: "rgb(138, 138, 138)",
  lodaingBgColor: "rgb(138, 138, 138)",
  lineColor: "grey",
  cardBgColor: "#c780fa",
  headerTop: "white",
  headerNTop: "white",
  tagContainerBgColor: "white",
  fontFamily: "font-family: 'Song Myung', serif;",
  boxShadow: "box-shadow: 0rem 0.1rem 0.3rem black;",
};

export const darkTheme: DefaultTheme = {
  mainBgColor: "black",
  subBgColor: "",
  mainTextColor: "white",
  subTextColor: "",
  lodaingBgColor: "",
  lineColor: "white",
  cardBgColor: "",
  headerTop: "",
  headerNTop: "",
  tagContainerBgColor: "",
  fontFamily: "font-family: 'Song Myung', serif;",
  boxShadow: "",
};

const customMediaQuery = (maxWidth: number): string =>
  `@media screen and (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
