const seedrandom = require("seedrandom");

module.exports = function generateMap({ width, height, seed, threshold = 47 }) {
  const columns = [...Array(width).keys()];
  const rows = [...Array(height).keys()];

  const rng = seedrandom(seed);

  return columns.map((element, x) => {
    return rows.map((element, y) => {
      const isEdge =
        x === 0 || x === width - 1 || (y === 0 || y === height - 1);

      if (isEdge) return 1;

      const percentage = Math.floor(rng() * (100 + 1));

      return percentage <= threshold ? 1 : 0;
    });
  });
};
