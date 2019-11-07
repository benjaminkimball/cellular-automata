import Cell from "./cell";

export default ({ map }) => {
  const mapWidth = map.length;
  const mapHeight = map[0].length;

  return (
    <>
      <div>
        {map.map((rows, x) =>
          rows.map((value, y) => (
            <Cell key={`${x}${y}`} x={x} y={y} value={value} />
          ))
        )}
      </div>

      <style jsx>{`
        div {
          width: ${mapWidth * 32}px;
          height: ${mapHeight * 32}px;
          display: grid;
          grid-template-columns: repeat(${mapWidth}, 1fr);
          grid-template-rows: repeat(${mapHeight}, 1fr);
        }
      `}</style>
    </>
  );
};
