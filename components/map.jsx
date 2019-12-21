import React, { useContext, useEffect, useRef } from "react";
import styled, { ThemeContext } from "styled-components";

import getDrawFunction from "../lib/get-draw-function";

const Container = styled.div`
  width: ${({ width, cellSize }) => width * cellSize}px;
  height: ${({ height, cellSize }) => height * cellSize}px;
  margin: 24px auto;
`;

const Canvas = styled.canvas.attrs(({ width, height, cellSize }) => ({
  width: width * cellSize,
  height: height * cellSize
}))`
  background-color: ${({ theme }) => theme.dustStorm100};
`;

export default ({ width, height, cellSize, map }) => {
  const canvasEl = useRef(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    ctx.fillStyle = theme.neutral500;

    map.forEach((rows, x) =>
      rows.forEach((value, y) =>
        getDrawFunction({ x, y, value, cellSize, ctx })()
      )
    );
  }, [map, cellSize, theme]);

  return (
    <Container width={width} height={height} cellSize={cellSize}>
      <Canvas
        ref={canvasEl}
        width={width}
        height={height}
        cellSize={cellSize}
      />
    </Container>
  );
};
