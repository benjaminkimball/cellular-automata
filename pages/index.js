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

Index.getInitialProps = () => ({ map: generateMap({ width: 10, height: 10 }) });

export default Index;
