import { Counter } from "./Counter";
import "./App.css";

function App() {
  return <div className="container">
    <Counter initialValue={20} />
  </div>;
}

export default App;
