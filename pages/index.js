import Head from "next/head";

import generateMap from "../lib/generate-map";

import Map from "../components/map";

const Index = ({ map }) => (
  <>
    <Head>
      <title>
        cellular-automata: An exploration of two-dimensional arrays in
        JavaScript.
      </title>
    </Head>

    <Map map={map} />
  </>
);

Index.getInitialProps = async ({ query }) => {
  const width = parseInt(query.width) || 10;
  const height = parseInt(query.height) || 10;
  const seed = query.seed;
  const threshold = parseInt(query.threshold) || 47;

  const map = generateMap({ width, height, seed, threshold });

  return { map };
};

export default Index;
