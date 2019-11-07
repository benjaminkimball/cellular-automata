import Head from "next/head";

import Map from "../components/map";

const Index = props => {
  return (
    <>
      <Head>
        <title>
          cellular-automata: An exploration of two-dimensional arrays in
          JavaScript.
        </title>
      </Head>

      <Map {...props} />
    </>
  );
};

Index.getInitialProps = async ({ query }) => {
  const width = parseInt(query.width) || 10;
  const height = parseInt(query.height) || 10;
  const seed = query.seed;
  const threshold = parseInt(query.threshold) || 47;
  const cellSize = parseInt(query.cellSize) || 32;

  return { width, height, seed, threshold, cellSize };
};

export default Index;
