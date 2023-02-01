import { DefaultTheme } from "styled-components";

export const whiteTheme: DefaultTheme = {};

export const darkTheme: DefaultTheme = {};

const customMediaQuery = (maxWidth: number): string =>
  `@media screen and (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
