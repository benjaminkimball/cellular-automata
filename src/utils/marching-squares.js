/* eslint-disable security/detect-object-injection */

export default map => {
  const width = map.length - 1;
  const height = map[0].length - 1;

  const columns = [...Array(width).keys()];
  const rows = [...Array(height).keys()];

  return columns.map((_element, x) =>
    rows.map((_element, y) => {
      const bits = [
        [map[x][y]],
        [map[x + 1][y]],
        [map[x + 1][y + 1]],
        [map[x][y + 1]]
      ].flat();

      return parseInt(bits.join(""), 2);
    })
  );
};
