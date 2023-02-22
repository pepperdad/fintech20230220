import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputComponents from "./components/InputComponents";
import ListComponentes from "./components/ListComponents";
import AxiosComponents from "./components/AxiosComponent";
import StyledComponent from "./components/StyledComponents";
import Welcome from "./components/Welcome"
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news" element={<NewsPage />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;