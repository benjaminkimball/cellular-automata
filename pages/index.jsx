import React from "react";

import generateMap from "../lib/generate-map";
import marchingSquares from "../lib/marching-squares";
import smoothMap from "../lib/smooth-map";
import queryOptions from "../lib/query-options";

import Map from "../components/map";

const IndexPage = ({ width, height, cellSize, map }) => (
  <Map width={width} height={height} cellSize={cellSize} map={map} />
);

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
