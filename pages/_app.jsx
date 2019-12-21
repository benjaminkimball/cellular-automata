import React from "react";
import App from "next/app";

import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

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
    background-color: #06142a;
    color: #f5ebe8;
  }
`;

export default class BaseApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Normalize />
        <BaseStyles />
        <Component {...pageProps} />
      </>
    );
  }
}
