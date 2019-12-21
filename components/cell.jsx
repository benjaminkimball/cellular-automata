import React from "react";
import styled from "styled-components";

const Cell = styled.svg.attrs(({ x, y, isEmpty, isFilled }) => ({
  style: {
    backgroundColor: isFilled ? "#06142a" : "#f5ebe8",
    fill: isEmpty ? "none" : "#f5ebe8",
    gridColumnStart: x + 1,
    gridRowStart: y + 1
  }
}))`
  width: 100%;
  height: 100%;
`;

export default ({ x, y, value }) => {
  switch (value) {
    case 0: {
      return <Cell as="div" x={x} y={y} isEmpty />;
    }

    case 1: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="0,5 5,10 0,10" />
        </Cell>
      );
    }

    case 2: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="10,5 5,10 10,10" />
        </Cell>
      );
    }

    case 3: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="0,5 10,5 10,10 0,10" />
        </Cell>
      );
    }

    case 4: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="5,0 10,0 10,5" />
        </Cell>
      );
    }

    case 5: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="5,0 10,0 10,5 5,10 0,10 0,5" />
        </Cell>
      );
    }

    case 6: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="5,0 10,0 10,10 5,10" />
        </Cell>
      );
    }

    case 7: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="5,0 10,0 10,10 0,10 0,5" />
        </Cell>
      );
    }

    case 8: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="0,0 5,0 0,5" />
        </Cell>
      );
    }

    case 9: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="0,0 5,0 5,10 0,10" />
        </Cell>
      );
    }

    case 10: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="0,0 5,0 10,5 10,10 5,10 0,5" />
        </Cell>
      );
    }

    case 11: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="0,0 5,0 10,5 10,10 0,10" />
        </Cell>
      );
    }

    case 12: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="0,0 10,0 10,5 0,5" />
        </Cell>
      );
    }

    case 13: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="0,0 10,0 10,5 5,10 0,10" />
        </Cell>
      );
    }

    case 14: {
      return (
        <Cell viewBox="0 0 10 10" x={x} y={y}>
          <polygon points="0,0 10,0 10,10 5,10 0,5" />
        </Cell>
      );
    }

    case 15: {
      return <Cell as="div" x={x} y={y} isFilled />;
    }

    default: {
      return <Cell as="div" x={x} y={y} isEmpty />;
    }
  }
};
