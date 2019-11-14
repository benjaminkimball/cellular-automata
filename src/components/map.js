import { h } from "preact";

import generateMap from "../utils/generate-map";
import smoothMap from "../utils/smooth-map";

import Cell from "./cell";

const Map = ({ width, height, seed, threshold, cellSize, iterations }) => {
  const map = smoothMap(
    generateMap({ width, height, seed, threshold, cellSize }),
    iterations
  );

  return (
    <div
      className="map"
      style={{
        width: `${width * cellSize}px`,
        height: `${height * cellSize}px`,
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        gridTemplateRows: `repeat(${height}, 1fr)`
      }}
    >
      {map.map((rows, x) =>
        rows.map((value, y) => (
          <Cell key={`${x}${y}`} x={x} y={y} value={value} />
        ))
      )}
    </div>
  );
};

export default Map;
