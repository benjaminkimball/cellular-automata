export default ({ x, y, value, cellSize, ctx }) => {
  const originX = x * cellSize;
  const originY = y * cellSize;
  const half = cellSize / 2;
  const whole = cellSize;
  const a = [originX, originY];
  const b = [originX + half, originY];
  const c = [originX + whole, originY];
  const d = [originX + whole, originY + half];
  const e = [originX + whole, originY + whole];
  const f = [originX + half, originY + whole];
  const g = [originX, originY + whole];
  const h = [originX, originY + half];

  switch (value) {
    case 0: {
      return () => {};
    }

    case 1: {
      return () => {
        ctx.moveTo(...h);
        ctx.lineTo(...f);
        ctx.lineTo(...g);
        ctx.closePath();
        ctx.stroke();
      };
    }

    case 2: {
      return () => {
        ctx.moveTo(...d);
        ctx.lineTo(...f);
        ctx.lineTo(...e);
        ctx.closePath();
        ctx.stroke();
      };
    }

    case 15: {
      return () => {
        ctx.fillRect(originX, originY, cellSize, cellSize);
      };
    }

    default: {
      return () => {};
    }
  }
};
