import generateMap from "../lib/generate-map";

import Cell from "./cell";

export default ({ width, height, seed, threshold, cellSize }) => {
  const map = generateMap({ width, height, seed, threshold });

  return (
    <>
      <div>
        {map.map((rows, x) =>
          rows.map((value, y) => (
            <Cell key={`${x}${y}`} x={x} y={y} value={value} />
          ))
        )}
      </div>

      <style jsx>{`
        div {
          width: ${width * cellSize}px;
          height: ${height * cellSize}px;
          display: grid;
          grid-template-columns: repeat(${width}, 1fr);
          grid-template-rows: repeat(${height}, 1fr);
        }
      `}</style>
    </>
  );
};
