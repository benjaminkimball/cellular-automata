import { h } from "preact";

const Cell = ({ x, y, value }) => {
  const position = {
    gridColumnStart: x + 1,
    gridRowStart: y + 1
  };

  switch (value) {
    case 0: {
      return <div style={{ backgroundColor: "#878484", ...position }} />;
    }

    case 1: {
      return <div style={{ backgroundColor: "#a89a88", ...position }} />;
    }

    case 2: {
      return <div style={{ backgroundColor: "#bcb079", ...position }} />;
    }

    case 3: {
      return <div style={{ backgroundColor: "#a1bc79", ...position }} />;
    }

    case 4: {
      return <div style={{ backgroundColor: "#54817b", ...position }} />;
    }

    case 5: {
      return <div style={{ backgroundColor: "#5e999d", ...position }} />;
    }

    case 6: {
      return <div style={{ backgroundColor: "#647c91", ...position }} />;
    }

    case 7: {
      return <div style={{ backgroundColor: "#585e87", ...position }} />;
    }

    case 8: {
      return <div style={{ backgroundColor: "#a077a6", ...position }} />;
    }

    case 9: {
      return <div style={{ backgroundColor: "#a6777f", ...position }} />;
    }

    case 10: {
      return <div style={{ backgroundColor: "#b5988c", ...position }} />;
    }

    case 11: {
      return <div style={{ backgroundColor: "#d9a380", ...position }} />;
    }

    case 12: {
      return <div style={{ backgroundColor: "#00bb8b", ...position }} />;
    }

    case 13: {
      return <div style={{ backgroundColor: "#ffab00", ...position }} />;
    }

    case 14: {
      return <div style={{ backgroundColor: "#cf2f34", ...position }} />;
    }

    case 15: {
      return <div style={{ backgroundColor: "#06142a", ...position }} />;
    }

    default: {
      return <div style={{ backgroundColor: "#878484", ...position }} />;
    }
  }
};

export default Cell;
