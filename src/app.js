import { h, render } from "preact";

import Map from "./components/map";
import queryOptions from "./utils/query-options";

const App = () => <Map {...queryOptions()} />;

const rootEl = document.getElementById("root");

render(<App />, rootEl, rootEl.lastChild);
