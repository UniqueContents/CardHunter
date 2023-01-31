import Header from "@/components/header/header";
import store from "@/module";
import GlobalStyle from "@/styles/globals";
import { darkTheme, whiteTheme } from "@/styles/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : whiteTheme}>
        <Provider store={store}>
          <Head>
            <title>CardHunter</title>
          </Head>
          <header>
            <Header />
          </header>
          <main>
            <GlobalStyle />
            <Component {...pageProps} />
          </main>
          <footer></footer>
        </Provider>
      </ThemeProvider>
    </>
  );
}
