import { h } from "preact";

const Cell = ({ x, y, value }) => {
  const position = {
    gridColumnStart: x + 1,
    gridRowStart: y + 1
  };

  switch (value) {
    case 0: {
      return <div class="cell" style={{ ...position }} />;
    }

    case 1: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="0,5 5,10 0,10" />
        </svg>
      );
    }

    case 2: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="10,5 5,10 10,10" />
        </svg>
      );
    }

    case 3: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="0,5 10,5 10,10 0,10" />
        </svg>
      );
    }

    case 4: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="5,0 10,0 10,5" />
        </svg>
      );
    }

    case 5: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="5,0 10,0 10,5 5,10 0,10 0,5" />
        </svg>
      );
    }

    case 6: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="5,0 10,0 10,10 5,10" />
        </svg>
      );
    }

    case 7: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="5,0 10,0 10,10 0,10 0,5" />
        </svg>
      );
    }

    case 8: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="0,0 5,0 0,5" />
        </svg>
      );
    }

    case 9: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="0,0 5,0 5,10 0,10" />
        </svg>
      );
    }

    case 10: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="0,0 5,0 10,5 10,10 5,10 0,5" />
        </svg>
      );
    }

    case 11: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="0,0 5,0 10,5 10,10 0,10" />
        </svg>
      );
    }

    case 12: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="0,0 10,0 10,5 0,5" />
        </svg>
      );
    }

    case 13: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="0,0 10,0 10,5 5,10 0,10" />
        </svg>
      );
    }

    case 14: {
      return (
        <svg
          viewBox="0 0 10 10"
          class="cell is-partial"
          style={{ ...position }}
        >
          <polygon points="0,0 10,0 10,10 5,10 0,5" />
        </svg>
      );
    }

    case 15: {
      return <div class="cell is-filled" style={{ ...position }} />;
    }

    default: {
      return <div class="cell" style={{ ...position }} />;
    }
  }
};

export default Cell;
