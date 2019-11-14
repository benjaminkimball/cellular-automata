export default (map, cellX, cellY) => {
  const width = map.length;
  const height = map[0].length;

  let count = 0;

  for (let x = cellX - 1; x <= cellX + 1; x++) {
    for (let y = cellY - 1; y <= cellY + 1; y++) {
      if (x >= 0 && x < width && y >= 0 && y < height) {
        /* eslint-disable-next-line security/detect-object-injection */
        if (x !== cellX || y !== cellY) count += map[x][y];
      } else {
        count++;
      }
    }
  }

  return count;
};
