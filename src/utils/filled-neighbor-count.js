/* eslint-disable security/detect-object-injection */

export default (map, cellX, cellY) => {
  const width = map.length;
  const height = map[0].length;

  const offsets = [-1, 0, 1];
  const neighbors = offsets
    .map(x => offsets.map(y => [cellX + x, cellY + y]))
    .flat();

  return neighbors.reduce((accum, [x, y]) => {
    if (x >= 0 && x < width && y >= 0 && y < height) {
      return x === cellX || y === cellY ? accum : accum + map[x][y];
    } else {
      return accum + 1;
    }
  }, 0);
};
