export default () => {
  const { width, height, seed, threshold, cellSize } = window.location.search
    .substring(1)
    .split("&")
    .reduce((accum, param) => {
      const [key, value] = param.split("=");

      return { ...accum, [key]: value };
    }, {});

  return {
    width: parseInt(width) || 64,
    height: parseInt(height) || 64,
    seed: seed,
    threshold: parseInt(threshold) || 47,
    cellSize: parseInt(cellSize) || 8
  };
};
