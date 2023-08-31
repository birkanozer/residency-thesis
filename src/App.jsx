import "./App.css";

import Menu from "./components/Menu";
import Plots from "./components/Plots";

function App() {
  return (
    <div className='p-d-flex'>
      <Menu />
      <Plots />
    </div>
  );
}

export default App;
