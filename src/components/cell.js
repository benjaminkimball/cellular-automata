import { h } from "preact";

const Cell = ({ x, y, value }) => (
  <div
    className={value ? "is-filled" : "is-open"}
    style={{
      gridColumnStart: x + 1,
      gridRowStart: y + 1
    }}
  />
);

export default Cell;
