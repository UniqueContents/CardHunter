import GlobalStyle from "@/styles/globals";
import { darkTheme, whiteTheme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : whiteTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
