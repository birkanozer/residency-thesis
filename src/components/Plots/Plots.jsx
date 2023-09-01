import Plot from "react-plotly.js";
import { Card } from "primereact/card";
import plot_data_list from "./utils";

import "primeflex/primeflex.css";

const Plots = () => {
  const plots_list = [];
  const config = { responsive: true };

  plot_data_list.forEach((entry) => {
    const [title, plot] = entry;
    const data = plot.data;
    const layout = plot.layout;

    plots_list.push(
      <div className='col-10 col-offset-1 mt-3 text-center'>
        <Card title={title} className='shadow-5'>
          <Plot data={data} layout={layout} />
        </Card>
      </div>
    );
  });
  return <>{plots_list}</>;
};

export default Plots;
