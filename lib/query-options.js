export default ({ width, height, seed, threshold, cellSize, iterations }) => ({
  width: parseInt(width) || 64,
  height: parseInt(height) || 64,
  seed: seed,
  threshold: parseInt(threshold) || 47,
  cellSize: parseInt(cellSize) || 8,
  iterations: parseInt(iterations) || 5
});
