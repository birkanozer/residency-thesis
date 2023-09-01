import Header from "./components/Header/Header";
import Plots from "./components/Plots/Plots";

import "./App.css";

const App = () => {
  return (
    <div className='grid'>
      <Header />
      <Plots />
    </div>
  );
};

export default App;
