import styled from "styled-components";

export default styled.canvas.attrs(({ width, height, cellSize }) => ({
  width: width * cellSize,
  height: height * cellSize
}))`
  margin: 48px;
  background-color: ${({ theme }) => theme.dustStorm100};
`;
