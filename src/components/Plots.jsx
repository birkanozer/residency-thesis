import Plot from "react-plotly.js";

import sankey_data from "../assets/sankey.json";

function Plots() {
  return <Plot data={sankey_data.data} layout={sankey_data.layout} />;
}

export default Plots;
