import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputComponents from "./components/InputComponents";
import ListComponentes from "./components/ListComponents";
import AxiosComponents from "./components/AxiosComponent";
import StyledComponent from "./components/StyledComponents";
import Welcome from "./components/Welcome"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/input" element={<InputComponents />}></Route>
        <Route path="/list" element={<ListComponentes />}></Route>
        <Route path="/axios" element={<AxiosComponents />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;