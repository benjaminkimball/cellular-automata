import seedrandom from "seedrandom";

export default ({ width, height, seed, threshold }) => {
  const columns = [...Array(width).keys()];
  const rows = [...Array(height).keys()];

  const rng = seedrandom(seed);

  return columns.map((_element, x) =>
    rows.map((_element, y) => {
      const isEdge = x === 0 || x === width - 1 || y === 0 || y === height - 1;

      if (isEdge) return 1;

      const percentage = Math.floor(rng() * (100 + 1));

      return percentage <= threshold ? 1 : 0;
    })
  );
};
