import logo from "./logo.svg";
import "./App.css";

// Display a driver
function App() {
  const tsunoda = {
    name: "Yuki Tsunoda",
    team: "Alpha Tauri",
    country: "Japan",
    handsome: true,
  };
  return (
    <div>
      <h1>Driver</h1>
      <h2>{tsunoda.name}</h2>
      <ul>
        <li>Team: {tsunoda.team}</li>
        <li>Country: {tsunoda.country}</li>
        <li>Handsome: {tsunoda.handsome.toString()}</li>
      </ul>
    </div>
  );
}

export default App;
