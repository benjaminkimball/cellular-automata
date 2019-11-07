export default ({ x, y, value }) => (
  <>
    <div />

    <style jsx>{`
      div {
        grid-column-start: ${x + 1};
        grid-row-start: ${y + 1};
        background-color: ${value ? "#000" : "#fff"};
      }
    `}</style>
  </>
);
