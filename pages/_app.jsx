import React from "react";
import App from "next/app";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

const theme = {
  neutral500: "#06142a",
  dustStorm100: "#f5ebe8"
};

const BaseStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.neutral500};
    color: ${({ theme }) => theme.dustStorm100};
  }
`;

export default class BaseApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Normalize />
        <BaseStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
