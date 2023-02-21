import "./App.css";
import InputComponents from "./components/InputComponents";
import Welcome from "./components/Welcome"

function App() {
  return (
    <div className="App">
      <Welcome userName="정도영" userAge={35} userHeight={175}></Welcome>

      <InputComponents></InputComponents>
    </div>
  );
}

export default App;