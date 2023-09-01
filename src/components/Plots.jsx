import Plot from "react-plotly.js";
import { Card } from "primereact/card";

import sankey_data from "../assets/sankey.json";

import "primeflex/primeflex.css";

const Plots = () => {
  const plot_data_list = [
    ["Tablo 1:", sankey_data],
    ["Tablo 2:", sankey_data]
  ];
  const plots_list = [];
  plot_data_list.forEach((entry) => {
    const [title, plot] = entry;
    plots_list.push(
      <div className='p-col p-mt-2'>
        <Card title={title} />
        <Plot data={plot.data} layout={plot.layout} />
        <Card />
      </div>
    );
  });
  return <>{plots_list}</>;
};

export default Plots;
