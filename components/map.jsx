import React from "react";
import styled from "styled-components";

import generateMap from "../lib/generate-map";
import marchingSquares from "../lib/marching-squares";
import smoothMap from "../lib/smooth-map";

import Cell from "./cell";

const Grid = styled.div.attrs(({ width, height, cellSize }) => ({
  style: {
    width: `${width * cellSize}px`,
    height: `${height * cellSize}px`,
    gridTemplateColumns: `repeat(${width}, 1fr)`,
    gridTemplateRows: `repeat(${height}, 1fr)`
  }
}))`
  display: grid;
  margin: 24px auto;
`;

const Map = ({ width, height, seed, threshold, cellSize, iterations }) => {
  const initial = generateMap({ width, height, seed, threshold, cellSize });
  const smoothed = smoothMap(initial, iterations);
  const map = marchingSquares(smoothed);

  return (
    <Grid width={width} height={height} cellSize={cellSize}>
      {map.map((rows, x) =>
        rows.map((value, y) => (
          <Cell key={`${x}${y}`} x={x} y={y} value={value} />
        ))
      )}
    </Grid>
  );
};

export default Map;
