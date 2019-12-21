import React from "react";

import Map from "../components/map";

const IndexPage = props => <Map {...props} />;

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
