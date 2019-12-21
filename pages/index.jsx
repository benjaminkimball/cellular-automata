import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "styled-components";

import generateMap from "../lib/generate-map";
import getDrawFunction from "../lib/get-draw-function";
import marchingSquares from "../lib/marching-squares";
import smoothMap from "../lib/smooth-map";
import queryOptions from "../lib/query-options";

import Map from "../components/map";

const IndexPage = ({ width, height, cellSize, map }) => {
  const canvasEl = useRef(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    ctx.fillStyle = theme.neutral500;

    map.forEach((rows, x) =>
      rows.forEach((value, y) =>
        getDrawFunction({ x, y, value, cellSize, ctx })()
      )
    );
  }, [map, cellSize, theme]);

  return (
    <Map ref={canvasEl} width={width} height={height} cellSize={cellSize} />
  );
};

IndexPage.getInitialProps = async ({ query }) => {
  const { width, height, seed, threshold, cellSize, iterations } = queryOptions(
    query
  );
  const initial = generateMap({ width, height, seed, threshold, cellSize });
  const smoothed = smoothMap(initial, iterations);
  const map = marchingSquares(smoothed);

  return { width, height, cellSize, map };
};

export default IndexPage;
