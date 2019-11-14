import filledNeighborCount from "./filled-neighbor-count";

export default function smoothMap(map, iterations = 5, threshold = 4) {
  if (iterations === 0) return map;

  const smoothed = map.map((rows, x) => {
    return rows.map((value, y) => {
      const count = filledNeighborCount(map, x, y);

      if (count > threshold) {
        return 1;
      } else if (count < threshold) {
        return 0;
      } else {
        return value;
      }
    });
  });

  return smoothMap(smoothed, iterations - 1, threshold);
}
