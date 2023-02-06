import Header from "@/components/header/header";
import store from "@/module";
import GlobalStyle from "@/styles/globals";
import { darkTheme, whiteTheme } from "@/styles/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : whiteTheme}>
        <Provider store={store}>
          <Head>
            <title>CardHunter</title>
          </Head>
          <header>
            {router.pathname !== "/AdminLogin" ? <Header /> : null}
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
