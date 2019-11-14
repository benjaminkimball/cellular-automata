/* eslint-disable security/detect-object-injection */

export default map => {
  const width = map.length;
  const height = map[0].length;

  const updatedMap = [];

  for (let x = 0; x < width - 1; x++) {
    if (!updatedMap[x]) updatedMap[x] = [];

    for (let y = 0; y < height - 1; y++) {
      const bits = [
        [map[x][y]],
        [map[x + 1][y]],
        [map[x][y + 1]],
        [map[x + 1][y + 1]]
      ].flat();

      updatedMap[x][y] = parseInt(bits.join(""), 2);
    }
  }

  return updatedMap;
};
