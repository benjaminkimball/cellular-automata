import { h } from "preact";

const Cell = ({ x, y, value }) => {
  const position = {
    gridColumnStart: x + 1,
    gridRowStart: y + 1
  };

  switch (value) {
    case 0: {
      return (
        <div class="cell" style={{ backgroundColor: "#878484", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 1: {
      return (
        <div class="cell" style={{ backgroundColor: "#a89a88", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 2: {
      return (
        <div class="cell" style={{ backgroundColor: "#bcb079", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 3: {
      return (
        <div class="cell" style={{ backgroundColor: "#a1bc79", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 4: {
      return (
        <div class="cell" style={{ backgroundColor: "#54817b", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 5: {
      return (
        <div class="cell" style={{ backgroundColor: "#5e999d", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 6: {
      return (
        <div class="cell" style={{ backgroundColor: "#647c91", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 7: {
      return (
        <div class="cell" style={{ backgroundColor: "#585e87", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 8: {
      return (
        <div class="cell" style={{ backgroundColor: "#a077a6", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 9: {
      return (
        <div class="cell" style={{ backgroundColor: "#a6777f", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 10: {
      return (
        <div class="cell" style={{ backgroundColor: "#b5988c", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 11: {
      return (
        <div class="cell" style={{ backgroundColor: "#d9a380", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 12: {
      return (
        <div class="cell" style={{ backgroundColor: "#00bb8b", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 13: {
      return (
        <div class="cell" style={{ backgroundColor: "#ffab00", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 14: {
      return (
        <div class="cell" style={{ backgroundColor: "#cf2f34", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    case 15: {
      return (
        <div class="cell" style={{ backgroundColor: "#06142a", ...position }}>
          <code>{value}</code>
        </div>
      );
    }

    default: {
      return (
        <div class="cell" style={{ backgroundColor: "#878484", ...position }}>
          <code>{value}</code>
        </div>
      );
    }
  }
};

export default Cell;
