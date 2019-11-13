import { h } from "preact";

function Cell({ x, y, value }) {
  return (
    <div
      style={{
        gridColumnStart: x + 1,
        gridRowStart: y + 1,
        backgroundColor: value ? "#000" : "#fff"
      }}
    />
  );
}

export default Cell;
