import React from "react";

import generateMap from "../lib/generate-map";
import marchingSquares from "../lib/marching-squares";
import smoothMap from "../lib/smooth-map";

const IndexPage = ({
  width,
  height,
  seed,
  threshold,
  cellSize,
  iterations
}) => {
  const initial = generateMap({ width, height, seed, threshold, cellSize });
  const smoothed = smoothMap(initial, iterations);
  const map = marchingSquares(smoothed);

  return <pre>{JSON.stringify(map, null, 2)}</pre>;
};

IndexPage.getInitialProps = async ({ query }) => {
  const { width, height, seed, threshold, cellSize, iterations } = query;

  return {
    width: (parseInt(width) || 64) + 1,
    height: (parseInt(height) || 64) + 1,
    seed: seed,
    threshold: parseInt(threshold) || 47,
    cellSize: parseInt(cellSize) || 8,
    iterations: parseInt(iterations) || 5
  };
};

export default IndexPage;
