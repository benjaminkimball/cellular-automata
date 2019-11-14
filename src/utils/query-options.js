export default () => {
  const {
    width,
    height,
    seed,
    threshold,
    cellSize,
    iterations
  } = window.location.search
    .substring(1)
    .split("&")
    .reduce((accum, param) => {
      const [key, value] = param.split("=");

      return { ...accum, [key]: value };
    }, {});

  return {
    width: (parseInt(width) || 24) + 1,
    height: (parseInt(height) || 24) + 1,
    seed: seed,
    threshold: parseInt(threshold) || 47,
    cellSize: parseInt(cellSize) || 24,
    iterations: parseInt(iterations) || 5
  };
};
