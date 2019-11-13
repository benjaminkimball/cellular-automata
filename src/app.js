import { h, render } from "preact";

import Map from "./components/map";
import getQueryOptions from "./utils/get-query-options";

const App = () => <Map {...getQueryOptions()} />;

const rootEl = document.getElementById("root");

render(<App />, rootEl, rootEl.lastChild);
