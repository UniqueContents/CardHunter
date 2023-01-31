import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainBgColor: string;
    subBgColor: string;
    mainTextColor: string;
    subTextColor: string;
    lineColor: string;
    cardBgColor: string;
    headerTop: string;
    headerNTop: string;
    tagContainerBgColor: string;
    fontFamily: string;
    boxShadow: string;
    lodaingBgColor: string;
  }
}
