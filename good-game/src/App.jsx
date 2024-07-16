import "./App.css";
import { useGameData } from "./hooks/useGameData";

function App() {
  const steamData = useGameData();
  console.log(steamData);

  return <div>ye berg</div>;
}

export default App;
