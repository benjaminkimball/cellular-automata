import filledNeighborCount from "./filled-neighbor-count";

export default function smoothMap(map, iterations = 5) {
  if (iterations === 0) return map;

  const smoothed = map.map((rows, x) => {
    return rows.map((value, y) => {
      const count = filledNeighborCount(map, x, y);

      if (count > 4) {
        return 1;
      } else if (count < 4) {
        return 0;
      } else {
        return value;
      }
    });
  });

  return smoothMap(smoothed, iterations - 1);
}
