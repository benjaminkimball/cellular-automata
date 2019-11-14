import { h, render } from "preact";

import Map from "./components/map";
import queryOptions from "./utils/query-options";

const rootEl = document.getElementById("root");

render(<Map {...queryOptions()} />, rootEl, rootEl.lastChild);
