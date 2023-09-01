import Header from "./components/Header/Header";
import Plots from "./components/Plots";

import "primeflex/primeflex.css";
import "./App.css";

const App = () => {
  return (
    <div className='p-grid'>
      <Header />
      <Plots />
    </div>
  );
};

export default App;
