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
      const [head, ...tail] = [h, f, g];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 2: {
      const [head, ...tail] = [d, f, e];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 3: {
      const [head, ...tail] = [h, d, e, g];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 4: {
      const [head, ...tail] = [b, c, d];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 5: {
      const [head, ...tail] = [b, c, d, f, g, h];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 6: {
      const [head, ...tail] = [b, c, e, f];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 7: {
      const [head, ...tail] = [b, c, e, g, h];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 8: {
      const [head, ...tail] = [a, b, h];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 9: {
      const [head, ...tail] = [a, b, f, g];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 10: {
      const [head, ...tail] = [a, b, d, e, f, h];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 11: {
      const [head, ...tail] = [a, b, d, e, g];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 12: {
      const [head, ...tail] = [a, c, d, h];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 13: {
      const [head, ...tail] = [a, c, d, f, g];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 14: {
      const [head, ...tail] = [a, c, e, f, h];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    case 15: {
      const [head, ...tail] = [a, c, e, g];

      return () => {
        ctx.moveTo(...head);
        tail.forEach(point => ctx.lineTo(...point));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      };
    }

    default: {
      return () => {};
    }
  }
};
