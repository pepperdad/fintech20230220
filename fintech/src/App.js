import "./App.css";
import InputComponents from "./components/InputComponents";
import ListComponentes from "./components/ListComponents";
import StyledComponent from "./components/StyledComponents";
import Welcome from "./components/Welcome"

function App() {
  return (
    <div className="App">
      <Welcome userName="정도영" userAge={35} userHeight={175}></Welcome>

      <InputComponents></InputComponents>
      <ListComponentes></ListComponentes>
      <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;